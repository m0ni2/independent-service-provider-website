import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <div style={{ height: '100vh' }} className='w-50 mx-auto d-flex justify-content-center align-items-center'>
                <Spinner animation="grow" />
            </div>
        </Container>
    );
};

export default Loading;