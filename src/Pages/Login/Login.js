import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import useLoginRegister from '../../hooks/useLoginRegister';

const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    const { validated, handleSubmit } = useLoginRegister();

    const handleGoogleSignIn = event => {
        event.preventDefault();
        signInWithGoogle();
        console.log(user);
    }

    return (
        <Container>
            <div className='w-50 mx-auto'>
                <h2 className='my-4'>Log In Form!!!</h2>
                <Form noValidate validated={validated} onSubmit={handleGoogleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;