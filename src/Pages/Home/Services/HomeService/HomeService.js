import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import './HomeService.css'

const HomeService = ({ service }) => {
    const { tags, title, price } = service;


    return (
        <Col md={6} sm={6} xl={4} className="mb-3">
            <div className="home-service-container rounded p-2">
                <div className="d-flex justify-content-between">
                    <div>
                        <Badge pill bg="primary" className="me-2">{tags.first}</Badge>
                        <Badge pill bg="primary">{tags.second}</Badge>
                    </div>
                    <div>
                        <h4>${price}</h4>
                    </div>
                </div>

                <h3>{title}</h3>
            </div>

        </Col>
    );
};

export default HomeService;