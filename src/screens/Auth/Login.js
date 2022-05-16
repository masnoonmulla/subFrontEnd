import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormGroup, Input, Label, Form as ReactForm, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { API } from '../../components/Utils';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { ErrorMessage, Field, FieldArray, Form as FormikForm, Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'validator'
import { isEmpty } from 'lodash';

const CLIENT_ID = '442672740622-69rg2oook8g6r8u7ebjuc6vd47ugm65q.apps.googleusercontent.com';

const animatedComponents = makeAnimated();

const Login = () => {

    let history = useNavigate();

    const [categoryList, setCategoryList] = useState([]);

    const getCategory = () => {
        axios.get(`${API.BASE_URL}category`)
            .then(({ data }) => {
                let resData = data.data.data;
                let arr = [];
                resData.map(val => {
                    let obj = {
                        label: val.name,
                        value: val._id
                    }
                    arr.push(obj);
                });
                setCategoryList(arr);
            }).catch(err => {
                setCategoryList([]);
                console.log(err.response);
            });
    }

    useEffect(() => {
        getCategory();
        setShowModal(false);
    }, []);

    const [userId, setUserId] = useState(null);
    const [userToken, setUserToken] = useState(null);

    const socialLogin = (response) => {
        setButtonDisabled(true);
        let data = response.profileObj;
        console.log({ data });
        setEmail(data.email);
        setName(data.name);
        let reqData = {
            "phone": data.phone,
            "email": data.email,
            "name": data.name,
            type: type
        }
        axios.post(`${API.BASE_URL}${type === 'Customer' ? 'user' : 'designer'}/socialLogin`, reqData)
            .then(({ data }) => {
                let resData = data.data;
                localStorage.setItem('token', resData.token);
                localStorage.setItem('data', resData.data);
                let userData = resData.data;
                setUserToken(resData.token);
                setUserId(userData._id);
                if (type === "Customer") {
                    history('/discover', { replace: true });
                } else {
                    setShowModal(true);
                }
                setButtonDisabled(false);
            }).catch(err => {
                console.log(err);
                setButtonDisabled(false);
            });
    }
    const [type, setType] = useState("Customer");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [imageArr, setImgArr] = useState([]);

    const imageSelected = async (e, formik) => {
        var fileUpload = document.getElementById("fileupload");
        if (typeof (FileReader) != "undefined") {
            var dvPreview = document.getElementById("dvPreview");
            dvPreview.innerHTML = "";

            let imgArr = [];
            for (var i = 0; i < fileUpload.files.length; i++) {
                let img = e.target.files[i];

                const form = new FormData();

                form.append('upload_preset', 'subjectiveDev');
                form.append('cloud_name', 'subjective');
                form.append('file', img);
                let res = await axios.post(`${API.img_url}image/upload`, form)
                if (res) {
                    let data = res.data;
                    var file = fileUpload.files[i];
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var img = document.createElement("IMG");
                        img.height = "100";
                        img.width = "100";
                        img.src = e.target.result;
                        img.className = 'img-thumbnail'
                        dvPreview.appendChild(img);
                    }
                    let obj = {
                        url: data.url
                    }
                    let newArr = [...imageArr, obj];
                    setImgArr(newArr);
                    reader.readAsDataURL(file);
                } else {
                    console.log("Failed");
                }
            }
        } else {
            console.log("This browser does not support HTML5 FileReader.");
        }
    }

    // const [urlFields, setUrlFields] = useState([1]);

    const labels = ['Personal Information', 'Work Description']
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phone: '',
        desc: '',
        insta_name: '',
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [instaName, setInstaName] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const iniitalValues = {
        name: personalInfo.name,
        email: personalInfo.email,
        phone: personalInfo.phone,
        desc: personalInfo.desc,
        insta_name: personalInfo.insta_name,
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('This field is required'),
        email: Yup.string().email('Enter valid email').required('This field is required'),
        phone: Yup.number().notRequired(),
        desc: Yup.string().required('This field is required'),
        insta_name: Yup.string().required('This field is required'),
    });

    const onPersonalInfoSubmit = (e) => {
        e.preventDefault();
        setFormErrors({});
        let valid = isValid();
        if (valid) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }

    const isValid = () => {
        const { error, isValid } = validateInput();
        if (!isValid) {
            setFormErrors(error)
        }
        return isValid;
    }

    const validateInput = () => {
        let error = {};
        if (Validator.isEmpty(name)) {
            error.name = 'This field is require';
        }

        if (Validator.isEmpty(email)) {
            error.email = 'This field is require';
        } else if (!Validator.isEmail(email)) {
            error.email = 'Invalid email address';
        }

        if (!Validator.isLength(phone, { min: 10, max: 10 })) {
            error.phone = 'Should be 10 digits';
        }
        if (Validator.isEmpty(desc)) {
            error.desc = 'This field is require';
        }
        if (Validator.isEmpty(instaName)) {
            error.instaName = 'This field is require';
        }
        return {
            error,
            isValid: isEmpty(error)
        }
    }
    const workIniitalValues = {
        category: [],
        urlFields: [''],
    }

    const validateInput1 = () => {
        let error = {};
        if (imageArr.length === 0) {
            error.fileUpload = 'This field is require';
        }
        return {
            error,
            isValid: isEmpty(error)
        }
    }
    const workValidationSchema = Yup.object({
        category: Yup.array().required('This field is required'),
        urlFields: Yup.array().of(Yup.string().trim().required('This field is required')),
    });

    const workDescSubmit = (values) => {
        setFormErrors({});
        let valid = isValid1();
        if (valid) {
            let cat = [];
            values.category.map((val, index) => {
                cat.push(val.value);
            });
            let urls = [];
            values.urlFields.map((val, index) => {
                let obj = {
                    "url": val
                }
                urls.push(obj);
            });
            let data = {
                'name': name,
                'email': email,
                'phone': phone,
                "instaHandle": instaName,
                "categroups": cat,
                "media": imageArr,
                "description": desc,
                "design_urls": urls
            }

            axios.put(`${API.BASE_URL}designer/${userId}`, data, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then(({ data }) => {
                console.log(data);
                setShowModal(false);
                history('/artist-dashboard', { replace: true });
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const isValid1 = () => {
        const { error, isValid } = validateInput1();
        if (!isValid) {
            setFormErrors(error)
        }
        return isValid;
    }
    return (
        <div className='containerClass'>
            <Card style={{ padding: '20px 40px', borderRadius: '8px', boxShadow: '2px black', width: '70%' }} id='loginCard'>
                <h4 style={{ textAlign: 'center' }}>Login</h4>
                <hr />
                <div className='form-group row'>
                    <div className='col-md-6 form-check'>
                        <Label>
                            <input
                                type="radio"
                                className='form-check-input'
                                checked={type === 'Customer'}
                                name='type'
                                onChange={() => setType('Customer')}
                            />
                            Customer
                        </Label>
                    </div>
                    <div className='col-md-6 form-check'>
                        <Label>
                            <input
                                type="radio"
                                className='form-check-input'
                                name='type'
                                checked={type === 'Sneaker'}
                                onChange={() => setType('Sneaker')}
                            />
                            Sneaker Designer
                        </Label>
                    </div>
                </div><br /><br />
                {
                    !buttonDisabled ?
                        <GoogleLogin
                            style={{ marginTop: 20 }}
                            clientId={CLIENT_ID}
                            disabled={buttonDisabled}
                            onSuccess={(response) => socialLogin(response)}
                            onFailure={(response) => console.log(response)}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={false}
                        />
                        :
                        <>
                            <p style={{ textAlign: 'center' }}>
                                <Spinner
                                    // style={{ width: "0.7rem", height: "0.7rem" }}
                                    color="primary"
                                    style={{ alignSelf: 'center' }}
                                    size='sm'
                                />
                                &emsp;Please Wait
                            </p>

                        </>
                }
            </Card>

            <Modal isOpen={showModal}>
                {/* <ModalHeader
                // toggle={() => setShowModal(!showModal)}
                >
                    Details
                </ModalHeader> */}
                <ModalBody>
                    <Stepper activeStep={activeStep}>
                        {
                            labels.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                    </Stepper>
                    <hr style={{ opacity: 0.1 }} />
                    <div style={{ marginTop: '5%' }}>
                        {
                            activeStep === 0 ?
                                // <Formik
                                //     initialValues={iniitalValues}
                                //     validationSchema={validationSchema}
                                //     onSubmit={onPersonalInfoSubmit}
                                // >
                                //     {
                                //         (formik) => {
                                //             return (
                                <ReactForm id='peronalInfoFrm' onSubmit={onPersonalInfoSubmit}>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <CustomInput
                                                    type={'text'}
                                                    name={'name'}
                                                    placeholder='Name'
                                                    label={'Name'}
                                                    value={name}
                                                    changeValue={(value) => setName(value)}
                                                    error={formErrors.name}
                                                    isRequired
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <CustomInput
                                                    type={'text'}
                                                    name={'insta_name'}
                                                    placeholder='Instagram Name'
                                                    label={'Insta Handle'}
                                                    value={instaName}
                                                    changeValue={(value) => setInstaName(value)}
                                                    error={formErrors.instaName}
                                                    isRequired
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <CustomInput
                                                    type={'text'}
                                                    name={'email'}
                                                    placeholder='Email'
                                                    error={formErrors.email}
                                                    label={'Email'}
                                                    isRequired
                                                    value={email}
                                                    changeValue={(value) => setEmail(value)}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <CustomInput
                                                    type={'text'}
                                                    name={'phone'}
                                                    error={formErrors.phone}
                                                    placeholder='Phone'
                                                    label={'Phone'}
                                                    value={phone}
                                                    changeValue={(value) => setPhone(value)}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <CustomInput
                                            type={'textarea'}
                                            name={'desc'}
                                            error={formErrors.desc}
                                            placeholder='Bio / Description'
                                            label={'Bio / Description'}
                                            value={desc}
                                            isRequired
                                            changeValue={(value) => setDesc(value)}
                                        />
                                    </FormGroup>
                                    <ModalFooter>
                                        <Button
                                            type='submit'
                                            color='primary'
                                            size='sm'
                                        >
                                            Next
                                        </Button>

                                    </ModalFooter>
                                </ReactForm>
                                //             )
                                //         }
                                //     }
                                // </Formik>
                                :
                                <>
                                    <Formik
                                        initialValues={workIniitalValues}
                                        validationSchema={workValidationSchema}
                                        onSubmit={workDescSubmit}
                                    >
                                        {
                                            formik1 => {
                                                return (
                                                    <FormikForm>
                                                        <WorkInfo
                                                            formik={formik1}
                                                            selectOptions={categoryList}
                                                            // urlFields={urlFields}
                                                            // setUrlFields={(fields) => setUrlFields(fields)}
                                                            imageSelected={(img, form) => imageSelected(img, form)}
                                                            error={formErrors}
                                                            fileValue={imageArr}
                                                        />
                                                        <ModalFooter>
                                                            <Button
                                                                color="secondary"
                                                                disabled={activeStep === 0}
                                                                onClick={handleBack}
                                                                size='sm'
                                                            >
                                                                Back
                                                            </Button>
                                                            <Button
                                                                color='primary'
                                                                type='submit'
                                                                // onClick={handleNext}
                                                                size='sm'
                                                            >
                                                                Finish
                                                            </Button>

                                                        </ModalFooter>
                                                    </FormikForm>
                                                )
                                            }
                                        }
                                    </Formik>
                                </>
                        }
                    </div>
                </ModalBody>
            </Modal>
        </div >
    );
};


const PersonalInfo = ({ formik }) => {
    return (
        <>
            <Row>
                <Col>
                    <FormGroup>
                        <CustomInput
                            type={'text'}
                            name={'name'}
                            placeholder='Name'
                            label={'Name'}
                            isRequired
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <CustomInput
                            type={'text'}
                            name={'insta_name'}
                            placeholder='Instagram Name'
                            label={'Insta Handle'}
                            isRequired
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <CustomInput
                            type={'text'}
                            name={'email'}
                            placeholder='Email'
                            label={'Email'}
                            isRequired
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <CustomInput
                            type={'text'}
                            name={'phone'}
                            placeholder='Phone'
                            label={'Phone'}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <CustomInput
                    type={'textarea'}
                    name={'desc'}
                    placeholder='Bio / Description'
                    label={'Bio / Description'}
                />
            </FormGroup>
        </>
    )
}

const WorkInfo = ({ urlFields, setUrlFields, imageSelected, formik, selectOptions, error, fileValue }) => {
    return (
        <>
            <FormGroup>
                <Label>Types <span className='text-danger'>*</span> </Label>
                <>
                    <Select
                        closeMenuOnSelect={false}
                        // components={animatedComponents}
                        isMulti
                        isClearable
                        isSearchable
                        name="category"
                        value={formik.values.category}

                        onChange={(value) => {
                            formik.setFieldValue('category', value)
                        }}
                        onBlur={() => formik.setFieldTouched("category", true)}
                        // menuPortalTarget={document.body}
                        options={selectOptions}
                    />
                    <ErrorMessage name={'category'}>
                        {
                            (errormsg) => <span className='text-danger'>{errormsg}</span>
                        }
                    </ErrorMessage>
                </>
            </FormGroup>
            <FormGroup>
                <Label>Work Urls</Label>
                <FieldArray name='urlFields'>
                    {
                        arrayProps => {
                            const { form, push, remove } = arrayProps;
                            const { values } = form;
                            const { urlFields } = values;

                            return (
                                <div>
                                    {
                                        urlFields.map((phno, index) => (
                                            <div key={index} style={index > 0 ? { marginTop: '4%' } : {}}>
                                                <div className='row'>
                                                    <div className='col-md-8'>
                                                        <Field name={`urlFields[${index}]`} className='form-control' />
                                                    </div>
                                                    <div className='col-md-2'>
                                                        {
                                                            index > 0 && (
                                                                <button type='button' className='btn-flat btn-sm btn-danger' onClick={() => remove(index)}> - </button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='col-md-2'>
                                                        <button type='button' className='btn-sm btn-flat btn-primary' onClick={() => push('')}> + </button>
                                                    </div>
                                                </div>
                                                <ErrorMessage name={`urlFields`}>
                                                    {
                                                        (errormsg) => <span className='text-danger'>{errormsg[index]}</span>
                                                    }
                                                </ErrorMessage>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                {/* <table class="table mb-4" id="url_tbl">
                    <tbody id='url_body'>
                        {
                            urlFields.map((val, index) => {
                                return (
                                    <tr key={val}>
                                        <td>
                                            <Input type="url" name="url[]" id="url1" placeholder='Url' />
                                        </td>
                                        <td>
                                            {
                                                val === 1 ?
                                                    <a class="add-row-btn" onClick={() => {
                                                        let lastUrl = urlFields.slice(-1)[0];
                                                        let urls = [...urlFields, lastUrl + 1];
                                                        setUrlFields(urls)
                                                    }}
                                                        data-row_index="0"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                                    </a>
                                                    :
                                                    <a class="remove-row-btn" onClick={() => {
                                                        let urls = urlFields.filter(item => item !== val);
                                                        setUrlFields(urls)
                                                    }}
                                                        data-row_index="0"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle text-danger"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                    </a>
                                            }

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </FormGroup>
            <FormGroup>
                <Label>Work Images</Label>
                <Input
                    type='file'
                    multiple
                    placeholder='Work Images'
                    accept='image/*'
                    id='fileupload'
                    name='fileUpload'
                    onChange={(e) => imageSelected(e)}
                    className={error && error.fileUpload ? 'is-invalid' : null}
                />
            </FormGroup>
            <div id='dvPreview'></div>
        </>
    )
}

const CustomInput = ({ label, value, changeValue, name, placeholder, isRequired, type, error }) => {
    return (
        <>
            <Label>{label} {isRequired && <span className='text-danger'>*</span>} </Label>
            <Input
                className={error ? `is-invalid` : null}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => changeValue(e.target.value)}
            // onBlur={() => formik.setFieldTouched("name", true)}
            />
            <span className='text-danger'>{error}</span>
        </>
    )
}
export default Login;