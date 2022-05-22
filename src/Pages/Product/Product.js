import React from 'react';

const Product = ({ product }) => {
    const { name, price, details, supplier, image, quantity } = product;
    console.log(supplier);
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Price: ${price}</p>
                            <p class="card-text">Quantity: {quantity}</p>
                            <p class="card-text">Details: <small>{details}</small></p>
                            <p className='card-text'>Supplier: {supplier}</p>
                            <button className=' btn btn-outline-secondary'>Update Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;