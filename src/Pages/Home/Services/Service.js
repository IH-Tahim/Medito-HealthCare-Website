import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Service = (props) => {
    return (
        <div>
            <Row>
                <Col md={7}>
                    <h3>Online { } Treatment</h3>
                    <h5>Get ongoing, personalized treatment for depression with antidepressants delivered monthly</h5>
                    <h5>${ } for your first appointment</h5>
                    <button>Confirm Appointment</button>
                    <p>Private, totally separate from your insurance and employer</p>
                </Col>

                <Col md={5}>
                    <img src={ } alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Service;