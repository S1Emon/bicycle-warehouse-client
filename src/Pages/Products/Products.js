import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <h2 className='text-primary text-center mt-5'>Our Products</h2>
            <div className='row'>
                {
                    products?.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;