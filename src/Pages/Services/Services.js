import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Steps from '../Shared/Steps/Steps';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div>
            <Container>
                <h2 className="mt-5 mb-4 text-center">Just Select A service To <br />Meert Our Qualityful Doctors</h2>

                <Row className="g-4 gx-5 mb-3">
                    {services.map(service => <Service key={service.id} service={service}></Service>)}
                </Row>
            </Container>
            <Steps />
        </div>
    );
};

export default Services;