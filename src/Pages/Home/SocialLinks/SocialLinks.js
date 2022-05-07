import React from 'react';
import { Container } from 'react-bootstrap';
import './SocialLogin.css';

const SocialLinks = () => {
    return (

        <Container className='py-5 bg-light' fluid>
            <h2 className='text-primary text-center my-4'>Social Links</h2>
            <div className='w-50 mx-auto d-flex justify-content-center align-items-center'>
                <a className='mx-2' he href="https://www.facebook.com/m0ni2/">
                    <i className="bi bi-facebook"></i>
                </a>
                <a className='mx-2' he href="https://www.instagram.com/im_monir_/">
                    <i className="bi bi-instagram"></i>
                </a>
                <a className='mx-2' he href="https://github.com/m0ni2/">
                    <i className="bi bi-github"></i>
                </a>
                <a className='mx-2' he href="https://www.linkedin.com/in/m0nir/">
                    <i className="bi bi-linkedin"></i>
                </a>

            </div>
        </Container>
    );
};

export default SocialLinks;