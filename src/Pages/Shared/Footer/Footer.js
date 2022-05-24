import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='text-center mt-5 bg-dark'>
            <div className='mt-3 mb-3'>
                <button className='btn btn-outline-primary  mt-3'><AiFillFacebook className='fs-5'></AiFillFacebook></button>
                <button className='btn btn-outline-primary  mt-3 ms-1'><AiFillLinkedin className='fs-5'></AiFillLinkedin></button>

                <button className='btn btn-outline-primary mt-3 ms-1'><AiFillYoutube className='fs-5'></AiFillYoutube></button>
                <button className='btn btn-outline-primary  mt-3 ms-1'><AiFillTwitterSquare className='fs-5'></AiFillTwitterSquare></button>
            </div>
            <small className=' text-light'>Copyright &copy;2022</small>
        </div>
    );
};

export default Footer;