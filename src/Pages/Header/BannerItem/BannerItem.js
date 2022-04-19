import React from 'react';
import { Carousel } from 'react-bootstrap';

// const BannerItem = (props) => {

//     const { img, heading, body } = props.data;
//     console.log(img)

const BannerItem = () => {


    return (
        <Carousel.Item>
            <h2>This is Banner</h2>
            {/* <img className="d-block w-100" src={img} alt={heading} />
            <Carousel.Caption>
                <h3>{heading}</h3>
                <p>{body}</p>
            </Carousel.Caption> */}
        </Carousel.Item>
    );
};

export default BannerItem;