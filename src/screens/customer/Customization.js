import React from 'react';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import Header from '../../components/Header';
import Stepper from '../../components/Stepper';
import './timeline.css';
import { BsLink } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

const Customization = () => {
    return (
        <div>
            <Header />
            <Stepper />
            <div className='timelineContainer'>
                <div id="sideImg"></div>

                <div className='timelineWrapper'>
                    <div className='timeLineRow'>
                        <ul>
                            <li>
                                <h6>
                                    <b> Describe your Customization style</b>
                                </h6>
                                <textarea className='form-control' rows={4} cols={50} placeholder='Write Something' style={{ marginTop: '8%' }}>

                                </textarea>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ width: '25px', border: '1px solid black', height: '25px', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }}>
                                            <BsLink color='black' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '8%' }} />
                                        </div>
                                        <span style={{ fontSize: '12px', marginLeft: '10%', lineHeight: '10px', alignSelf: 'center' }}>Link to shoe</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ width: '25px', border: '1px solid black', height: '25px', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }}>
                                            <MdAttachFile color='black' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '8%' }} />
                                        </div>
                                        <span style={{ fontSize: '12px', marginLeft: '10%', alignSelf: 'center', lineHeight: '10px', }}>Attach Photo</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div style={{ marginLeft: '20%' }}>
                            <div className='previewCard'>
                                <div className='previewPadding'>
                                    <h5>Ticket Preview</h5>
                                </div>
                                <hr style={{ padding: '0px', margin: '0px' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                    <span style={{ marginLeft: '-10px', marginTop: '15px' }} className='circle'></span>
                                    <span className='circle' style={{ marginRight: '-10px', marginTop: '15px' }}></span>
                                </div>
                                <div className='previewPadding' style={{ marginTop: '-30px', lineHeight: '10px' }}>
                                    <p>Artist  Name</p>
                                    <p>Shoe Details</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#9af078', paddingLeft: '10px', paddingRight: '10px' }}>
                                    <p>Price</p>
                                    <p>₹2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: '2%', marginTop: '4%' }}>
                        <h6>
                            <b>Inspiration Gallery</b>
                        </h6>

                    </div>

                    <div className='timeLineRow'>
                        <div style={{ marginLeft: '2%', marginTop: '4%' }}>
                            <h6>
                                <b>Tags</b>
                            </h6>
                            <div className='timeLineRow'>
                                <div className='tagContainer'>
                                    Nature
                                </div>
                                <div className='tagContainer' style={{ marginLeft: '5%' }}>
                                    Nature
                                </div>
                                <div className='tagContainer' style={{ marginLeft: '5%' }}>
                                    Nature
                                </div>
                                <div className='tagContainer' style={{ marginLeft: '5%' }}>
                                    Nature
                                </div>
                                <div className='tagContainer' style={{ marginLeft: '5%' }}>
                                    Nature
                                </div>
                            </div>
                            <div className='timeLineRow' style={{marginTop:'5%'}}>
                                <div className='tagContainer'>
                                    Nature
                                </div>
                                <div className='tagContainer' style={{ marginLeft: '5%' }}>
                                    Nature
                                </div>
                            </div>
                        </div>
                        <Row style={{ marginTop: '20px', marginLeft: '25%' }}>
                            <Col lg='6'>
                                <button className=' cancelBtn'>Cancel</button>
                            </Col>
                            <Col lg='6'>
                                <button className='nextBtn'>Next</button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Customization;