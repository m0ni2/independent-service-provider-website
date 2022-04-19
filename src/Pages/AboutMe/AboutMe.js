import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/monir.png'

const AboutMe = () => {
    return (
        <Container>
            <Row className='d-flex align-items-center'>
                <Col md={6}>
                    <div className="about-me-text">
                        <h2>Hi there, I am Md. Monirul Islam. I am photographer, traveler and I love to capture your unique moments.</h2>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="about-me-image">
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;