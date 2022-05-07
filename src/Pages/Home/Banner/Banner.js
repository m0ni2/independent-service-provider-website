import React from 'react';
import { Carousel } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import './Banner.css';

const Banner = () => {

    const slides = useFetch('slider');

    return (
        <Carousel>
            {
                slides.map(slide => <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide.img}
                        alt={slide.heading}
                    />
                    <Carousel.Caption>
                        <h3>{slide.heading}</h3>
                        <p>{slide.body}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Banner;