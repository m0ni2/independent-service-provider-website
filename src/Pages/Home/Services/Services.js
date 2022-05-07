import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import Service from '../Service/Service';

const Services = () => {

    const services = useFetch('servicesData');

    return (
        <Container className='py-4'>
            <h2 className='text-primary text-center my-4'>Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </Container>
    );
};

export default Services;