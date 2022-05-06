import React from 'react';
import { Badge, Card, Col, Row } from 'reactstrap';
import './dashboard.css'
import Header from './Header';
import { FaStar } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='dashHeader'></div>
            <div className='container row'>
                <div className='col-md-4'>


                    <Card style={{ padding: '20px', marginTop: '-100px', alignItems: 'center', borderRadius: '12px' }}>
                        <img
                            src={require('../assets/profile.jpg')}
                            style={{ width: '100px', height: '100px', borderRadius: '50%', alignSelf: 'center' }}
                        />
                        <h5 style={{ textAlign: 'center', marginTop: '10px' }}>Name</h5>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Tickets Available&emsp;
                            <Badge color='primary'>
                                3
                            </Badge>
                        </p>
                        <div style={{ padding: '0px 15px', height: '30px', background: '#63db18', borderRadius: '10px', alignSelf: 'center' }}>
                            <p style={{ textAlign: 'center' }}>Follow</p>
                        </div>
                        <h6 style={{ marginTop: '10%' }}>
                            About
                        </h6>
                        <p style={{ fontSize: '12px' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div className='row gx-3'>
                            <div className='col'>
                                <Badge color='secondary'>
                                    Sneaker customization
                                </Badge>
                            </div>
                            <div className='col'>
                                <Badge color='secondary'>
                                    Prints
                                </Badge>
                            </div>
                            <div className='col'>
                                <Badge color='secondary'>
                                    Clothing
                                </Badge>
                            </div>
                        </div>
                        <hr></hr>

                        <p>Social Links</p>
                    </Card>
                    <div style={{ marginTop: '15%' }}>
                        <p>
                            <b>Ratings</b>
                            &emsp;
                            (12)
                            &emsp;
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                        </p>
                        <hr style={{ color: 'black', height: '3px' }}></hr>
                    </div>
                    <div className='row gx-1' style={{ alignItems: 'center' }}>
                        <div className='col-md-2'>
                            <div id='round'></div>
                            <p style={{ fontSize: '10px', alignSelf: 'center' }}><b>User Name</b></p>
                        </div>
                        <p className='col'>
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                        </p>
                    </div>
                    <hr style={{ color: 'black', height: '1px' }}></hr>
                    <div className='row gx-1' style={{ alignItems: 'center' }}>
                        <div className='col-md-2'>
                            <div id='round'></div>
                            <p style={{ fontSize: '10px', alignSelf: 'center' }}><b>User Name</b></p>
                        </div>
                        <p className='col'>
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                        </p>
                    </div>
                    <hr style={{ color: 'black', height: '1px' }}></hr>
                    <div className='row gx-1' style={{ alignItems: 'center' }}>
                        <div className='col-md-2'>
                            <div id='round'></div>
                            <p style={{ fontSize: '10px', alignSelf: 'center' }}><b>User Name</b></p>
                        </div>
                        <p className='col'>
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                        </p>
                    </div>
                    <hr style={{ color: 'black', height: '1px' }}></hr>
                    <div className='row gx-1' style={{ alignItems: 'center' }}>
                        <div className='col-md-2'>
                            <div id='round'></div>
                            <p style={{ fontSize: '10px', alignSelf: 'center' }}><b>User Name</b></p>
                        </div>
                        <p className='col'>
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                            &nbsp;
                            <FaStar color='black' />
                        </p>
                    </div>
                    <hr style={{ color: 'black', height: '1px' }}></hr>
                </div>
                <div className='col-md-8'></div>
                <div className='container' style={{ backgroundColor: '#F5F5F5',width:'100%' }}>
                    <h2 style={{ textAlign: 'center' }}>Similar Artist</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;