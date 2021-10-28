import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner-container" >
            <Container>
                <Row>
                    <Col md={5} className="py-5 align_banner_text">

                        <div>
                            <h2 className="text-white">We Provide Total</h2>
                            <h1>Health care Solution</h1>
                            <br />
                            <p>Everyday e bring hope to milions of children in the world's hardest places as a sinn of god's unconditional.</p>
                            <Link to="/about"><button className="btn btn-primary btn-lg me-3">Learn More</button></Link>
                            <Link to="/services"><button className="btn btn-primary btn-lg">View services</button></Link>

                        </div>

                    </Col>
                    <Col md={7}>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;