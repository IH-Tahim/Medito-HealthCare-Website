import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeService from './HomeService/HomeService';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => {
                setHomeServices(data);
            });
    }, []);
    const homeService = homeServices.slice(0, 8);

    return (
        <div>
            <Container>
                <h2 className="text-center mt-5">Our Services</h2>
                <h5 className="text-center mb-4">Meet Our Expert Doctor Today. Start form $10</h5>

                <Row>
                    {
                        homeService.map(service => <HomeService key={service.id} service={service}></HomeService>)
                    }

                </Row>
                <div className="text-center">
                    <Link to="/services">
                        <Button variant="primary" className="w-25 m-auto fs-3 mt-3 mb-4 rounded-pill">See All Services</Button>
                    </Link>
                </div>

            </Container>

        </div>
    )
};

export default HomeServices;