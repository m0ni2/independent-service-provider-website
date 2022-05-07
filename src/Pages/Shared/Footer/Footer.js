import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    return (
        <footer>
            <Container fluid className='bg-dark py-5'>
                <div className='w-50 mx-auto text-center'>
                    <p style={{ color: 'rgba(255,255,255,.55)' }}>	&copy; {thisYear} Perfect Wedding Photography </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;