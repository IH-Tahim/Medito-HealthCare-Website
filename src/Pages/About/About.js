import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import aboutImage from "../../images/aboutImg.png";
import Steps from '../Shared/Steps/Steps';

const About = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center mt-3">About Us</h2>
                <h4 className="text-center">Know Who We Are</h4>
                <Row>
                    <Col md={7}>
                        <h3 className="mt-5">Welcome To Medito</h3>
                        <br />
                        <p>Medito is a Professional medical & health  care Platform. Here we will provide you only online medical services, which we hope you will like very much. We're dedicated to providing you the best of medical & health survices, with our qulatityful doctors and medical team. We're working to turn our passion for medical & health services into a booming online platform. We hope you enjoy our medical & health services as much as we enjoy offering them to you.</p>
                        <br />
                        <p>Please give your support and love. Thanks for visiting us.</p>
                    </Col>

                    <Col md={5}>
                        <img src={aboutImage} alt="" className="img-fluid" />
                    </Col>
                </Row>
                <Steps />
            </Container>
        </div>
    );
};

export default About;