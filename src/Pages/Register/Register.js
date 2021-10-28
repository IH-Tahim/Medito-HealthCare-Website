import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




const Register = () => {
    const { googleSignIn } = useAuth();
    //Variable For Geting Email,password and Eroor message
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');

    // Variable For Url redirect
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';

    const auth = getAuth();//firebase auth

    const handelEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value);
    }
    console.log(email, password);

    const emailPassSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setMessage('User Created Success');
                history.push(redirectUrl);

            }).catch(error => {
                setMessage(error.message);
            })
    }

    return (
        <Container>
            <Row className="justify-content-center my-4">
                <div className="w-75 border border-2 border-primary">
                    <h3 className="text-center pt-2">Regiser</h3>

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
                    <Button variant="primary" type="submit" onClick={emailPassSignUp}>
                        Register
                    </Button>

                    <p className="text-success my-2">{message}</p>
                    <p className="my-3">Already registered? <Link to="/login">Login Now</Link></p>

                    <hr />

                    <Button className="btn btn-warning mb-3" onClick={googleSignIn}>Login WIth Google</Button>
                </div>
            </Row>
        </Container>
    );
};

export default Register;