import React from 'react';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import Header from '../../components/Header';
import Stepper from '../../components/Stepper';
import './timeline.css';
import { BsLink } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

const Timeline = () => {
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
                                    <b> Pick an Estimated Timeline for your order</b>
                                </h6>
                                <div className='row gx-5' style={{ marginTop: '40px' }}>
                                    <div className='col'>
                                        <div className='timelineCard'>
                                            <h6>
                                                Super Fast
                                            </h6>
                                            <p>1 week</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='timelineCard'>
                                            <h6>
                                                Fast
                                            </h6>
                                            <p>2 week</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='timelineCard'>
                                            <h6>
                                                Usual
                                            </h6>
                                            <p>1 month</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='timelineCard'>
                                            <h6>
                                                No Deadline
                                            </h6>
                                            <p >According to Artist convenience</p>
                                        </div>
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
                    <ul>
                        <li>
                            <h6>
                                <b>Shoe Name / Model that you would like to customize</b>
                            </h6>
                            <Row>
                                <Col lg='4'>
                                    <input className='form-control' placeholder='Eg.Fila Jumps Air, Max,Stan ,Smith' style={{ border: '1px solid #333', borderRadius: '8px' }} />
                                </Col>
                                <Col lg='2'>
                                    <select className='form-control' style={{ border: '1px solid #333', borderRadius: '8px' }}  >
                                        <option>Size</option>
                                    </select>
                                </Col>
                            </Row>
                        </li>
                    </ul>

                    <div style={{ marginLeft: '10px', marginTop: '20px', padding: '20px' }}>
                        <Label>
                            <Input type='radio' />
                            New
                        </Label>
                        <Label style={{ marginLeft: '30px' }}>
                            <Input type='radio' />
                            Preowned
                        </Label>
                    </div>
                    <div className='timeLineRow' style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                        <Row style={{ marginTop: '20px',marginLeft:'55%' }}>
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

export default Timeline;