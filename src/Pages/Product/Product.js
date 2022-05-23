import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, details, supplier, image, quantity } = product;

    const navigate = useNavigate();

    const handleNavigate = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Details: <small>{details}</small></p>
                    <p className='card-text'>Supplier: {supplier}</p>
                </div>
                <div>
                    <button className="btn btn-outline-primary w-100" onClick={() => handleNavigate(_id)}>Update Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;