import React from 'react';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import { Button } from 'react-bootstrap';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = ({ navigate, from }) => {

    const [signInWithGoogle, userGoogle, loadingGoogleGoogle, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
        navigate(from, { replace: true });
    }
    const handleFacebookSignIn = async () => {
        await signInWithFacebook();
        navigate(from, { replace: true });
    }
    const handleGithubSignIn = async () => {
        await signInWithGithub();
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50' ></div>
                <p className='m-2'>Or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50' ></div>
            </div>
            <div className="social-login-buttons">
                <Button onClick={handleGoogleSignIn} className='my-2 col w-75 mx-auto d-block' variant="info" type="submit">
                    <img style={{ width: '30px' }} className='me-2' src={google} alt="" />
                    Login with Google
                </Button>
                <Button onClick={handleFacebookSignIn} className='my-2 w-75 mx-auto d-block' variant="info" type="submit">
                    <img style={{ width: '30px' }} className='me-2' src={facebook} alt="" />
                    Login with Facebook
                </Button>
                <Button onClick={handleGithubSignIn} className='my-2 w-75 mx-auto d-block' variant="info" type="submit">
                    <img style={{ width: '30px' }} className='me-2' src={github} alt="" />
                    Login with Github
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;