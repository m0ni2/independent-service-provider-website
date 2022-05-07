import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, heading, services, price } = service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-100" alt={heading} />
                <div className="card-body">

                    <h5 className="card-title">{heading}</h5>
                    <h5 className="card-title my-3">$ {price}</h5>
                    <ul className="list-group">
                        {
                            services.map(service => <li className="list-group-item"
                                key={service}
                            >{service}</li>)
                        }
                    </ul>



                </div>
                <div className="card-footer bg-transparent border-0 w-50 mx-auto mb-3">
                    <Link className='btn btn-primary' to='/checkout'>Book Now</Link>
                </div>
            </div>
        </div >
    );
};

export default Service;