import React from 'react';
import { Carousel } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import './Banner.css';

const Banner = () => {

    const banners = useFetch('bannerData');

    return (
        <Carousel>
            {
                banners.map(banner => <Carousel.Item key={banner.id} >
                    <img
                        className="d-block w-100"
                        src={banner.img}
                        alt={banner.heading}
                    />
                    <Carousel.Caption>
                        <h3>{banner.heading}</h3>
                        <p>{banner.body}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Banner;