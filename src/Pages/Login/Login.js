import React, { useState } from 'react';

import { Container, Form, Row, Button } from 'react-bootstrap';

import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';

    const handelGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirectUrl)
            })
    }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');

    const auth = getAuth();

    const handelEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value);
    }

    // Email Password Login Method
    const emailPassLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setMessage('Login Success');
                history.push(redirectUrl);
            }).catch(error => {
                setMessage(error.message)
            })
    }


    return (
        <Container>
            <Row className="justify-content-center my-4">
                <div className="w-75 border border-2 border-primary">
                    <h3 className="text-center pt-2">Login</h3>

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
                    <Button variant="primary" type="submit" onClick={emailPassLogin}>
                        Login
                    </Button>
                    <p className="text-success my-2">{message}</p>
                    <p className="my-3">New User? <Link to="/register">Register Now</Link></p>


                    <hr />

                    <Button className="btn btn-warning mb-3" onClick={handelGoogleLogin}>Login WIth Google</Button>
                </div>

            </Row>

        </Container>
    );
};

export default Login;