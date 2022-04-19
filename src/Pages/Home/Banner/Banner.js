import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import useData from '../../../hooks/useData';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const slides = useData('slider');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Container fluid className='p-0'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    slides.map(slide => <Carousel.Item key={slide.id}>
                        <img className="d-block w-100" src={slide.img} alt={slide.heading} style={{ height: 'calc(100vh - 109px)' }} />
                        <Carousel.Caption>
                            <h3>{slide.heading}</h3>
                            <p>{slide.body}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
                }
            </Carousel>
        </Container>
    );
};

export default Banner;
