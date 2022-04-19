import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerItem = ({ slide }) => {

    const { img, heading, body, img2 } = slide;


    return (

        <Carousel.Item>
            <img className="d-block w-100" src={img2} alt={heading} />
            <Carousel.Caption>
                <h3>{heading}</h3>
                <p>{body}</p>
            </Carousel.Caption>
        </Carousel.Item>

    );
};

export default BannerItem;