import React, { useState } from 'react';
import { Button, Card, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const CLIENT_ID = '442672740622-69rg2oook8g6r8u7ebjuc6vd47ugm65q.apps.googleusercontent.com';

const animatedComponents = makeAnimated();

const Login = () => {
    let history = useNavigate();
    const socialLogin = (response) => {
        setButtonDisabled(true);
        let data = response.profileObj;
        let reqData = {
            "phone": data.phone,
            "email": data.email,
            "name": data.email,
            type: type
        }
        axios.post('https://subjectiv.herokuapp.com/api-v1/user/socialLogin', reqData)
            .then(({ data }) => {
                let resData = data.data;
                localStorage.setItem('token', resData.token);
                localStorage.setItem('data', resData.data);
                setShowModal(true);
                if (type === "Customer") {
                    history('/discover', { replace: true });
                } else {
                    history('/artist-dashboard', { replace: true });
                }
                setButtonDisabled(false);
            }).catch(err => {
                console.log(err);
                setButtonDisabled(false);
            })
    }
    const [type, setType] = useState("Customer");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const selectOptions = [
        { value: 'Sneaker', label: 'Sneaker' },
        { value: 'Bag', label: 'Bag' },
        { value: 'Clothing', label: 'Clothing' },
    ];

    const imageSelected = () => {
        var fileUpload = document.getElementById("fileupload");
        if (typeof (FileReader) != "undefined") {
            var dvPreview = document.getElementById("dvPreview");
            dvPreview.innerHTML = "";
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
            for (var i = 0; i < fileUpload.files.length; i++) {
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
                reader.readAsDataURL(file);
            }
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    }

    const [urlFields, setUrlFields] = useState([1]);
    const addNewRow = (e) => {
        e.preventDefault();

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
                            // render={(renderProps) => (
                            //     <button
                            //         // className={styles.socialIcon}
                            //         onClick={() => renderProps.onClick()}
                            //         disabled={renderProps.disabled}
                            //     >
                            //     Login With Google    {/* <FcGoogle /> */}
                            //     </button>
                            // )}
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
                <ModalHeader
                    toggle={() => setShowModal(!showModal)}
                >
                    Details
                </ModalHeader>
                <ModalBody>

                    <FormGroup>
                        <Label>Types <span className='text-danger'>*</span> </Label>
                        <Select
                            closeMenuOnSelect={false}
                            // components={animatedComponents}
                            isMulti
                            isClearable
                            isSearchable
                            name="color"
                            // menuPortalTarget={document.body}
                            options={selectOptions}
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Name <span className='text-danger'>*</span> </Label>
                                <Input placeholder='Name' />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Insta Handle <span className='text-danger'>*</span></Label>
                                <Input placeholder='Instagram Name' />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Email <span className='text-danger'>*</span></Label>
                                <Input placeholder='Email' />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Phone</Label>
                                <Input placeholder='Phone' />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Bio / Description <span className='text-danger'>*</span></Label>
                        <Input type='textarea' placeholder='Description' />
                    </FormGroup>

                    <FormGroup>
                        <Label>Work Urls</Label>
                        <table class="table mb-4" id="url_tbl">
                            {/* <thead>
                                <tr>
                                    <th>Url</th>
                                    <th>Action</th>
                                </tr>
                            </thead> */}
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
                        </table>
                    </FormGroup>

                    <FormGroup>
                        <Label>Work Images</Label>
                        <Input type='file' multiple placeholder='Work Images' accept='image/*' id='fileupload' onChange={() => imageSelected()} />
                    </FormGroup>

                    <div id='dvPreview'></div>
                </ModalBody>
                <ModalFooter>
                    <Button size='md' color="secondary" onClick={() => setShowModal(!showModal)}>Close</Button>
                    <Button size='md' color="primary" onClick={() => setShowModal(!showModal)}>Save</Button>{' '}
                </ModalFooter>
            </Modal>
        </div >
    );
};

export default Login;