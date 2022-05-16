import React from 'react';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import Header from '../../components/Header';
import Stepper from '../../components/Stepper';
import './timeline.css';

const Timeline = () => {
    return (
        <div>
            <Header />
            <Stepper />
            <Row>
                <Col lg='1'>
                    <img
                        src={require('../../assets/gritty gradient6.png')}
                        style={{ width: '40%' }}

                    />
                </Col>
                <Col style={{ backgroundColor: '#DDD' }}>
                    <div className='timelineContainer'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <ul>
                                    <li>
                                        <h6>
                                            <b> Pick an Estimated Timeline for your order</b>
                                        </h6>
                                        <div className='row gx-5'>
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
                                    <li>
                                        <h6>
                                            <b>Shoe Name / Model that you would like to customize</b>
                                        </h6>
                                        <Row>
                                            <Col lg='8'>
                                                <input className='form-control' placeholder='Eg.Fila Jumps Air, Max,Stan ,Smith' style={{ border: '1px solid #333', borderRadius: '8px' }} />
                                            </Col>
                                            <Col>
                                                <select className='form-control' style={{ border: '1px solid #333', borderRadius: '8px' }}  >
                                                    <option>Size</option>
                                                </select>
                                            </Col>
                                        </Row>

                                        <div style={{marginLeft:'10px'}}>
                                            <Label>
                                                <Input type='radio' />
                                                New
                                            </Label>
                                            <Label>
                                                <Input type='radio' />
                                                Preowned
                                            </Label>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-3'>

                            </div>
                            <div className='col-md-3'>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Timeline;