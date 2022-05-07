import React from 'react';
import { Button } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, img, heading, body } = service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-100" alt={heading} />
                <div className="card-body">

                    <h5 className="card-title">{heading}</h5>
                    <p className="card-text">{body}</p>
                </div>
                <div className="card-footer bg-transparent border-0 w-50 mx-auto mb-3">
                    <Button className='btn btn-primary'>Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;