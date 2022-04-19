import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import useData from '../../../../hooks/useData';
import BannerItem from '../BannerItem/BannerItem'

const Banner = () => {

    const slides = useData('slider');

    return (

        <Container fluid className='p-0'>
            <Carousel>
                {
                    slides.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }
            </Carousel>
        </Container>
    );
};

export default Banner;
