import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../logo.svg";


const Header = () => {

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" height="40" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#home">Services</Nav.Link>
                            <Nav.Link href="#features">Blog</Nav.Link>
                            <Nav.Link href="#pricing">Appointment</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;