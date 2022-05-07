import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, heading, body, price } = service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-100" alt={heading} />
                <div className="card-body">

                    <h5 className="card-title">{heading}</h5>
                    <h5 className="card-title">$ {price}</h5>
                    <p className="card-text">{body}</p>
                </div>
                <div className="card-footer bg-transparent border-0 w-50 mx-auto mb-3">
                    <Link className='btn btn-primary' to='/checkout'>Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;