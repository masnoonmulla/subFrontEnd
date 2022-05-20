import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Sheet from "react-modal-sheet";
import "./artisit-dashboard.css";
import { FaArrowLeft } from 'react-icons/fa'
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import Select from 'react-select';
import axios from "axios";
import { API } from "../../components/Utils";

function ArtistDashboard() {
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
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  const [isEditProfile, setEditProfile] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    desc: '',
    insta_name: '',
    category: [],
    urlFields: [''],
  }
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
  return (
    <>
      <Header />
      <div className="containerAtDb">
        <div className={`itemAtDB1 atDetail`}>
          <div className="detailWrapper">
            <div className="itemWrapper">
              <div className="avaOutDiv">
                <img
                  className="artavStyle"
                  src={require("../../assets/sneakersCat.jpg")}
                />
                <p className="atrinfo"> Javed Chaursiya</p>
                <button onClick={() => setEditProfile(true)} className="prfileLink"> View Profile</button>
              </div>
            </div>
            <div className={`itemWrapper`}>
              <div className="statsContainer">
                <div className="statsItem">
                  <p>
                    {" "}
                    Tickets Sold : <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    Orders Accepted: <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    Orders Completed: <span className="numStyle">
                      {" "}
                      32{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className="statsContainer">
                <div className="statsItem">
                  <p>
                    {" "}
                    Rating & Reviews : <span className="numStyle">
                      {" "}
                      32{" "}
                    </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    Revenue Stats : <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
                <div className="statsItem">
                  <p>
                    {" "}
                    New Orders : <span className="numStyle"> 32 </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={`itemWrapper artDiv3`}>
              <div className="ctaBox1">
                <img src="https://res.cloudinary.com/subjective/image/upload/v1650095747/email_black_24dp_ofaaex.svg" />

                <p className="ctaBoxText"> Messages</p>
              </div>
              <div className="ctaBox1">
                <img src="https://res.cloudinary.com/subjective/image/upload/v1650095727/notifications_black_24dp_1_gc7fr7.svg" />
                <p className="ctaBoxText"> Notifications</p>
              </div>
              <div className="ctaBox1">
                <img src="https://res.cloudinary.com/subjective/image/upload/v1650095703/toll_black_24dp_wqudmp.svg" />
                <p className="ctaBoxText"> Manage Tokens</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="itemAtDB2">
          
        </div> */}
        {/* <div className="itemAtDB"></div> */}
      </div>
      {
        isEditProfile
          ?
          <div style={{ paddingLeft: '40px' }}>
            <button style={{ border: 'none', backgroundColor: '#FFF' }} onClick={() => setEditProfile(false)}>
              <FaArrowLeft size={20} onClick={() => setEditProfile(false)} />
            </button>
            <div style={{ padding: '40px' }}>
              <Formik initialValues={initialValues}>
                {
                  (formik) => {
                    return (
                      <Form>
                        <Row>
                          <Col lg='5'>
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
                                isRequired
                              />
                            </FormGroup>
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
                                  options={categoryList}
                                />
                                <ErrorMessage name={'category'}>
                                  {
                                    (errormsg) => <span className='text-danger'>{errormsg}</span>
                                  }
                                </ErrorMessage>
                              </>
                            </FormGroup>
                          </Col>
                          <Col lg='1' >
                            <div style={{
                              borderLeft: '3px solid #f5f5f5',
                              height: '100%'
                            }} />
                          </Col>
                          <Col lg='5'>
                            <FormGroup>
                              <Label>Work Urls <span className='text-danger'>*</span></Label>
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
                              />
                            </FormGroup>
                            <div id='dvPreview'></div>
                          </Col>
                        </Row>
                      </Form>
                    )
                  }
                }
              </Formik>
            </div>
          </div>
          :
          <div className="secondContainer">
            <div className="tableContainer">
              <Tabs selectedTabClassName="selectedTab">
                <TabList className="tabStyle">
                  <Tab>
                    <p className="categoryText"> All Orders (12) </p>
                  </Tab>
                  <Tab>
                    <p className="categoryText">New Orders (11) </p>
                  </Tab>
                  <Tab>
                    <p className="categoryText">Orders Completed (10)</p>
                  </Tab>
                </TabList>

                <TabPanel>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Ticket No</th>
                        <th>Client Name</th>
                        <th>Description/Brief</th>
                        <th>Media</th>
                        <th>Timeline</th>
                        <th>Status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </TabPanel>
                <TabPanel>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Ticket No</th>
                        <th>Client Name</th>
                        <th>Description/Brief</th>
                        <th>Media</th>
                        <th>Timeline</th>
                        <th>Status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Ticket No</th>
                        <th>Client Name</th>
                        <th>Description/Brief</th>
                        <th>Media</th>
                        <th>Timeline</th>
                        <th>Status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                      <tr className="clmDiv">
                        <td data-label="Contact ID">IQC36631</td>
                        <td data-label="Power"> Jhon Doe  </td>
                        <td className="textDescription" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hwhe Read more</td>
                        <td data-label="Value">  View Image   </td>
                        <td data-label="Power"> 1-2 Weeks </td>
                        <td data-label="Expiration"> Completed</td>
                        <td data-label="">
                          <a href="#" className="btn btn__active">
                            View Order
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>
            </div>
            <div className="cardsContainer">
              <div className="hwcard">
                <div className="hwContent">
                  <div className="hwAvatar">
                    <img
                      className="avaStyleHome"
                      src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Explore_from_a_wide_range_of_artist_and_find_the_perfect_match.-01_gv7uoc.png"
                    />
                  </div>
                  Explore from a wide range of artist and find the perfect match.
                </div>
              </div>

              <div className="hwcard">
                <div className="hwContent">
                  <div className="hwAvatar">
                    <img
                      className="avaStyleHome"
                      src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Explore_from_a_wide_range_of_artist_and_find_the_perfect_match.-01_gv7uoc.png"
                    />
                  </div>
                  Explore from a wide range of artist and find the perfect match.
                </div>
              </div>

              <div className="hwcard">
                <div className="hwContent">
                  <div className="hwAvatar">
                    <img
                      className="avaStyleHome"
                      src="https://res.cloudinary.com/subjective/image/upload/v1650090204/Explore_from_a_wide_range_of_artist_and_find_the_perfect_match.-01_gv7uoc.png"
                    />
                  </div>
                  Explore from a wide range of artist and find the perfect match.
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

const CustomInput = ({ label, name, placeholder, isRequired, type }) => {
  return (
    <>
      <Label>{label} {isRequired && <span className='text-danger'>*</span>} </Label>
      <Field name={name}>
        {
          ({ field, meta }) => {
            return <Input
              type={type}
              // className={className}
              className={meta.touched && meta.error ? `is-invalid` : null}
              id={name}
              placeholer={placeholder}
              {...field}
            />
          }
        }
      </Field>
      <ErrorMessage name={name}>
        {
          (errormsg) => <span className='text-danger'>{errormsg}</span>
        }
      </ErrorMessage>
    </>
  )
}
export default ArtistDashboard;
