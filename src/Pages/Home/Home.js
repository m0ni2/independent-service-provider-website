import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import useData from '../../hooks/useData';
import BannerItem from '../BannerItem/BannerItem';
import './Home.css';

const Home = () => {

    // const data = useData('sliderData');



    return (
        <Container fluid className='p-0'>
            <Carousel>
                <h2 style={{ marginTop: '200px' }}>This is home</h2>
                {/* {
                    data.map(data => <BannerItem
                        key={data.id}
                        data={data}
                    ></BannerItem>)
                } */}
                <BannerItem></BannerItem>
            </Carousel>
        </Container>
    );
};

export default Home;