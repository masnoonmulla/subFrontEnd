import React, { useState } from 'react';
import { Badge, Card, Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, CardImg, CardBody, } from 'reactstrap';
import './dashboard.css'
import Header from './Header';
import { FaStar } from 'react-icons/fa';
import classnames from 'classnames';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [childTab, setChildTab] = useState('1');
    const [breakPoints, setBreakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
        { width: 1500, itemsToShow: 6 },
    ]);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    return (
        <div>
            <Header />
            <div className='dashHeader'></div>
            <div className='row' >
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
                    <div style={{ padding: '20px' }}>
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
                        {
                            arr.map(val => {
                                if (val <= 3) {

                                    return (
                                        <>
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
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className='col-md-7'>
                    <Link
                        to={'/timeline?step=timeline'}
                        className='bookTicketBtn'
                    >
                        Book Tickets
                    </Link>

                    <a
                        className='msgBtn'
                    >
                        <b>Messages</b>
                    </a>


                    <div style={{ marginTop: '20px' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 20 }}>Work History</p>
                    </div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: childTab === '1' })}
                                onClick={() => { setChildTab('1'); }}
                            >
                                Completed (2)
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: childTab === '2' })}
                                onClick={() => { setChildTab('2'); }}
                            >
                                In Progress(0)
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={childTab}>
                        <div className="productCarousel">
                            <Carousel
                                pagination={false}
                                breakPoints={breakPoints}
                                showEmptySlots
                            >
                                {
                                    arr.map(val => {
                                        return (
                                            <Card key={val}
                                                className='productCard'
                                            >
                                                <CardImg
                                                    className="cardImg"
                                                    variant="top"
                                                    src={require('../assets/sneakersCat.jpg')}
                                                />
                                                <CardBody>
                                                    <p style={{ fontSize: 12 }}>Customize Supra Shoes</p>
                                                    <p style={{ fontSize: 10 }}>Lorem Ipsum is simply dummy text of .  </p>
                                                </CardBody>

                                            </Card>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div>
                            <p><span style={{ fontWeight: 'bold', fontSize: 18 }}>Portfolio</span> (Work Examples)</p>
                            <Carousel
                                pagination={false}
                                breakPoints={breakPoints}
                                showEmptySlots
                            >
                                {
                                    arr.map(val => {
                                        return (
                                            <Card key={val}
                                                className='productCard'
                                            >
                                                <CardImg
                                                    className="cardImg"
                                                    variant="top"
                                                    src={require('../assets/sneakersCat.jpg')}
                                                />
                                            </Card>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p><span style={{ fontWeight: 'bold', fontSize: 18 }}>Hire Artist</span> (steps)</p>

                            <div className='flexRow'>
                                <div>
                                    <div id='parent'>
                                        <div id='circle'></div>
                                        <img
                                            src={require('../assets/arrowRight.png')}
                                            style={{ width: '60px', marginLeft: '30px' }}
                                        />
                                    </div>
                                    <p style={{ fontSize: '12px' }}>Check Availablity</p>
                                </div>
                                <div>
                                    <div id='parent'>
                                        <div id='circle'></div>
                                        <img
                                            src={require('../assets/arrowRight.png')}
                                            style={{ width: '60px', marginLeft: '30px' }}
                                        />
                                    </div>
                                    <div style={{ width: '180px', fontSize: '12px', alignSelf: 'center' }}>
                                        Select delivery Time<br />Super Fast - Fast -Usual
                                    </div>
                                </div>
                                <div>
                                    <div id='parent'>
                                        <div id='circle'></div>
                                        <img
                                            src={require('../assets/arrowRight.png')}
                                            style={{ width: '60px', marginLeft: '30px' }}
                                        />
                                    </div>
                                    <p style={{ fontSize: '12px' }}>Describe your requirements or<br /> idea to the Artist</p>
                                </div>
                                <div>
                                    <div id='parent'>
                                        <div id='circle'></div>
                                    </div>
                                    <p style={{ fontSize: '12px', alignSelf: 'center' }}>Place Order</p>
                                </div>
                            </div>
                        </div>
                    </TabContent>
                </div>
                <div className='container' style={{ backgroundColor: '#F5F5F5', padding: '50px' }}>
                    <h2 style={{ textAlign: 'center' }}>Similar Artist</h2>
                    <div className='container'>
                        <div className='row'>
                            <SimilarCard />
                            <SimilarCard />
                            <SimilarCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SimilarCard = () => {
    return (
        <div className='card col-md-3'>
            <div className='cardImg'></div>
            <img
                src={require('../assets/profile.jpg')}
                style={{ width: '80px', height: '80px', borderRadius: '50%', alignSelf: 'center', borderWidth: '3px', borderStyle: 'solid', borderColor: 'orange', marginTop: '-50px', zIndex: 1 }}
            />
            <div className='container'>
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>Name</p>
                <p style={{ textAlign: 'center', fontSize: '14px' }}>Sneaker Customizer</p>
                <p style={{ fontSize: '12px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Row>
                    <Col>
                        <h6>Ratings</h6>
                    </Col>
                    <Col>
                        <h6>Tickets</h6>
                    </Col>
                    <Col>
                        <h6>Orders</h6>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Dashboard;