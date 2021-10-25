import { faUserMd, faTruck, faPills, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Facilities.css'

const Facilitys = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src="https://images2.imgbox.com/55/2f/d3uj3EZy_o.png" className="img-fluid" alt="" />
                    </Col>

                    <Col md={8}>
                        <h2 className="mt-5 pt-5">In search of good online medicale Services?</h2>
                        <h4>We Have Best Doctor's to Heal You</h4>
                        <Row className="mt-4">
                            <Col sm={6}>
                                <div className="d-flex align-items-center f_item_container">
                                    <div className="icon_box_1 me-3">
                                        <FontAwesomeIcon icon={faHistory} size="lg" />
                                    </div>
                                    <div className="mt-3">
                                        <h3>24/7 Online Service</h3>
                                        <p>We provide 24/7 online services</p>
                                    </div>
                                </div>

                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center f_item_container">
                                    <div className="icon_box_1 me-3">
                                        <FontAwesomeIcon icon={faUserMd} size="lg" />
                                    </div>
                                    <div className="mt-3">
                                        <h3>Qualified Doctors</h3>
                                        <p>We provide 24/7 online services</p>
                                    </div>
                                </div>

                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center f_item_container">
                                    <div className="icon_box me-3">
                                        <FontAwesomeIcon icon={faTruck} size="lg" />
                                    </div>
                                    <div className="mt-3">
                                        <h3>Delivery Medicine</h3>
                                        <p>Get prescribed medicine within 3days</p>
                                    </div>
                                </div>

                            </Col>
                            <Col sm={6}>
                                <div className="d-flex align-items-center f_item_container">
                                    <div className="icon_box me-3">
                                        <FontAwesomeIcon icon={faPills} size="lg" />
                                    </div>
                                    <div className="mt-3">
                                        <h3>Online Medicine</h3>
                                        <p>Emergency medicine delivery service</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Facilitys;

