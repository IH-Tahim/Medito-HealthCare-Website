import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../logo.svg";


const Header = () => {
    const { logOut, user } = useAuth();

    const userIcon = user.email;

    console.log(userIcon);




    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" height="40" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            {user?.email ?
                                <div className="pt-1">
                                    <button type="button" className="btn btn-secondary btn-sm" onClick={logOut}>Logout</button>
                                    <span className=" ms-1">{userIcon}</span>
                                </div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;