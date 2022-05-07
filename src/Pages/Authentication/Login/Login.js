import React, { useRef } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef();
    const passwordRef = useRef();

    let errorElement;

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email) {
            signInWithEmailAndPassword(email, password);

        }
    }

    if (signInError) {
        errorElement = <div>
            <p>Error: {signInError?.message}</p>
        </div>
    }
    if (signInLoading) {
        return <Loading />
    }
    if (signInUser) {
        navigate(from, { replace: true });
    }

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Password Reset Email Sent!');
        }
        else {
            toast.error('Please Provide Email Address!');
        }

    }

    return (
        <Container className='my-5'>
            <h2 className='text-primary text-center mb-3'>Please Login</h2>

            <div className='w-50 mx-auto'>
                <Form onSubmit={handleLogin}>
                    <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                        <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required autoComplete='username' />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required autoComplete='current-password' />
                    </FloatingLabel>

                    <Button className='my-4 w-50 mx-auto d-block' variant="info" type="submit">
                        Login
                    </Button>
                </Form>

                <p>New User? <Link to='/register' className='text-primary text-decoration-none'> Please Register</Link></p>

                <p>Forget Password?
                    <Button onClick={handlePasswordReset} className='btn bt-link py-0 text-decoration-none' variant="link">Reset Password</Button>
                </p>

                <p className='text-danger'>{errorElement}</p>

                <SocialLogin
                    navigate={navigate}
                    from={from}
                ></SocialLogin>

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

export default Login;