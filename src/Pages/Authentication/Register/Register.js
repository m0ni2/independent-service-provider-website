import React, { useRef, useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [agree, setAgree] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorForCreateUser,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorForUpdateUser] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        toast.success(' User Created and Verification Email Sent!');
    }

    return (
        <Container className='my-5'>
            <h2 className='text-primary text-center mb-3'>Please Register</h2>

            <div className='w-50 mx-auto'>
                <Form onSubmit={handleRegister}>
                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                        <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required autoComplete='current-password' />
                    </FloatingLabel>

                    <Form.Group className="my-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>

                    <Button disabled={!agree} className='my-4 w-50 mx-auto d-block' variant="info" type="submit">
                        Register
                    </Button>
                </Form>

                <p>Already Registered? <Link to='/login' className='text-primary text-decoration-none'> Please Login</Link></p>

                <SocialLogin></SocialLogin>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
    );
};

export default Register;