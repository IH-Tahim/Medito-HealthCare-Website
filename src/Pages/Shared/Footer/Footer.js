import React from 'react';
import { Col, Container, Form, InputGroup, Row, Button } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import logoLight from "../../../logoWhite.svg";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark">
                <Container>
                    <Row className="pt-3">
                        <Col md={3} className="border_right ps-3">
                            <h3 className="mb-4">Quick Contact</h3>
                            <ul className="footer-ul">
                                <li className="mb-3"><FontAwesomeIcon icon={faPhoneAlt} /> &ensp;Phone:
                                    <a href="tel:+8801671234567">01671234567</a></li>
                                <li className="mb-3"> <FontAwesomeIcon icon={faEnvelope} /> &ensp;Email:
                                    <a href="mailto:support@medito.com">support@medito.com</a></li>
                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> &ensp;Location:
                                    12/3/jha mainka chipa road,Dhanmondi,Dhaka-1209</li>
                            </ul>

                        </Col>


                        <Col md={5} className="text-center border_right px-3">
                            <div className="border_bottom">
                                <img src={logoLight} height="50" alt="" />
                                <p>To serve the humanity as a whole with this noble vision the Ibn Sina Trust
                                    started its journey in June 1980. The trust has agreed upon to provide health care service to the
                                    people of Bangladesh with affordable cost.
                                </p>
                            </div>
                            <div className="mt-3 mb-3">
                                <h4>Subscribe to Newslatter</h4>
                                <InputGroup hasValidation>

                                    <Form.Control type="text" required className="form_bg" />
                                    <Button> <FontAwesomeIcon icon={faLocationArrow} /> </Button>
                                </InputGroup>
                            </div>

                        </Col>


                        <Col md={4}>
                            <h3 className="text-center">Opening Hours</h3>
                            <p className="open-hr-table"><span>Mon - Tues : </span> <span>6.00 am - 10.00 pm</span></p>
                            <p className="open-hr-table"><span>Wednes - Thurs :</span> <span>8.00 am - 6.00 pm</span></p>
                            <p className="open-hr-table"><span>Friday : </span> <span>3.00 pm - 8.00 pm</span></p>
                            <p className="open-hr-table"><span>Sunday : </span> <span>6.00 am - 10.00 pm</span></p>
                            <p className="open-hr-table"><span>Saturday: </span> <span>10.00 am - 2.00 pm</span></p>
                        </Col>
                    </Row>

                </Container>
                <div className="footer_bottom py-3">
                    Copyright ©2021 made with ❤ by Tahim. All Rights Reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;