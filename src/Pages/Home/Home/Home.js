import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Home.css'

const Home = () => {
    return (
        <div className='bg-light'>
            <Banner />
            <Services />
            <SocialLinks />
        </div>
    );
};

export default Home;