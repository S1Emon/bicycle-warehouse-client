import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const { productId } = useParams();

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');

        if (confirm) {
            const url = `https://localhost:5000/product/${id}`

            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',

                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainProduct = products?.filter(product => product._id !== id)
                    setProducts(remainProduct);
                })
        }
    }
    return (
        <div className='text-center'>
            <h2 className='mt-3'>Manage Products!</h2>
            <p>{productId}</p>
            {
                products?.map(product => <div key={product._id} >
                    <h4>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h4></div>)
            }
        </div>
    );
};

export default ManageProduct;