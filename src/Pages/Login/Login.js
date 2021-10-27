import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Row, Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { googleSignIn, logOut } = useAuth();
    return (
        <Container>
            <Row className="justify-content-center my-4">
                <div className="w-50">
                    <h3 className="text-center">Login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Link to="/register">register</Link>
                    <br />
                    <p className="text-center">---------OR----------</p>

                    <Button className="btn btn-info" onClick={googleSignIn}>Login WIth Google</Button>
                </div>

            </Row>
            <button onClick={logOut}>logout</button>
        </Container>
    );
};

export default Login;