import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className='bg-light d-flex justify-content-center align-items-center' style={{ height: 'calc(100vh - 197px)' }}>
            <h2 style={{ fontSize: '5rem' }}>Page Not Found</h2>
        </Container>
    );
};

export default NotFound;