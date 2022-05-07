import React, { useRef } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef();
    const passwordRef = useRef();

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email) {
            await signInWithEmailAndPassword(email, password)
            navigate(from, { replace: true });
            toast.success('Login Successfully!');

        }

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
                        <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required />
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

export default Login;