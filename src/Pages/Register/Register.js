import React, { useState } from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value);
    }
    console.log(email, password);

    return (
        <Container>
            <Row className="justify-content-center my-4">
                <div className="w-50">
                    <h3 className="text-center">Regiser</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onBlur={handelEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={handelPasswordChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Link to="/login">login</Link>
                </div>
            </Row>
        </Container>
    );
};

export default Register;