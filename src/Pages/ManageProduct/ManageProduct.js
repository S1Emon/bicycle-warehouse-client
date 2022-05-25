import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UpdateModal from '../UpdateProduct/UpdateProduct';

const ManageProduct = () => {
    // const [products, setProducts] = useProducts();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [isDelete, setIsDelete] = useState(false);
    const [isUpdate, setIsUpdate] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            });

    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsDelete(!isDelete);
                    toast(data.success);
                    toast("Product Deleted");
                });
        }
    }
    return (

        <div className='container'>
            <h2 className='mt-3 text-center'>Manage Products!</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4'>
                <div className="col">
                    <div className="card h-100">
                        <img src={product?.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Price: {product.price}</p>
                            <p className="card-text">Quantity: {product.quantity}</p>
                            <p className="card-text">Details: <small>{product.details}</small></p>
                            <p className='card-text'>Supplier: {product.supplier}</p>
                        </div>
                        <div>
                            <div className='btn w-50 p-0'> <UpdateModal setIsUpdate={setIsUpdate} isUpdate={isUpdate} id={product._id}></UpdateModal></div>


                            <button onClick={() => handleDelete(product._id)} className="btn btn-outline-danger w-50">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageProduct;