import React from 'react';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services] = useServices()
    return (
        <div className='container'>
            <h3 className='text-primary text-center mt-5 mb-4'>Get Our Special Service</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services?.map(service =>
                        <div key={service._id}>
                            <div className="col">
                                <div className="card">
                                    <img src={service.image} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{service.name}</h3>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <button className='btn btn-outline-primary'>Explore Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Services;