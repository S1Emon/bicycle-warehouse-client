import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => toast(data.success, "New Product Added"));
        event.target.reset();
    };




    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3'>Add a new Product!</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' className='mb-2' {...register("name", { required: true })} />
                <input placeholder='Product Image URL' className='mb-2' {...register("image", { required: true })} />
                <textarea placeholder='Product Details' className='mb-2'{...register("details", { required: true })} />
                <input placeholder='Price' className='mb-2' type="number" {...register("price", { min: 1, required: true })} />
                <input placeholder='Quantity' className='mb-2' type="number" {...register("quantity", { min: 1, required: true })} />
                <input placeholder='Supplier Name' className='mb-2'{...register("supplier", { required: true, maxLength: 20 })} />
                <input className='btn btn-outline-dark' value="Add Product" type="submit" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;