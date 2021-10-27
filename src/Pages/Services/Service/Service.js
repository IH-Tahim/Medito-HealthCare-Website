import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, title, tags, price, id } = service;
    return (

        <Col md={6} sm={12} xl={6} className="">
            <Row className="p-2 border border-3 border-primary">
                <Col md={4}>
                    <div>
                        <img src={img} alt="" className="w-75" />
                    </div>
                </Col>
                <Col md={8} className="m-auto">



                    <div className="mt-2 mb-2">
                        <Badge pill bg="primary" className="me-2">{tags.first}</Badge>
                        <Badge pill bg="primary">{tags.second}</Badge>
                    </div>



                    <h3>{title} Treatment</h3>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="m-auto">Cost: ${price}</p>
                        </div>
                        <div>
                            <Link to={`/services/${id}`} details={service}>
                                <button className="btn btn-primary">Select</button>
                            </Link>
                        </div>
                    </div>



                </Col>
            </Row>

        </Col>

    );
};

export default Service;