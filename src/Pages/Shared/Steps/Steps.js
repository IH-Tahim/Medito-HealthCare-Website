import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import formImg from "../../../images/form fillup.svg";
import onlineDocImg from "../../../images/online doctor.svg";
import deliveryImg from "../../../images/Delivery.svg"

const Steps = () => {
    return (
        <Container>
            <h2 className="text-center mt-5 mb-4">Feel Better In  Easy 3 Steps</h2>
            <Row>
                <Col md={4} className="text-center">
                    <img src={formImg} alt="" className="w-50" />
                    <h5 className="mt-3">Tell us your details</h5>
                    <p className="">Help us understand your situation<br />so that we can offer you the best service</p>
                </Col>

                <Col md={4} className="text-center">
                    <img src={onlineDocImg} alt="" className="w-50" />
                    <h5 className="mt-2">Meet Your Doctor on <br />Video Call</h5>
                    <p className="">Connect with your doctor <br />and our medical team.</p>
                </Col>

                <Col md={4} className="text-center">
                    <img src={deliveryImg} alt="" className="w-50" />
                    <h5 className="mt-2">Get Your Medicine on Door</h5>
                    <p className="">Get your medicine's on your door<br />within 2/3 working days.</p>
                </Col>
            </Row>
        </Container>

    );
};

export default Steps;