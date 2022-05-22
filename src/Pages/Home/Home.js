import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Home = () => {
    const [products] = useProducts();
    const product3 = products?.slice(0, 3);

    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://i.ibb.co/Pr7Dw4g/banner4.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <h4>Choose The First Gear</h4>
                            <p>Our Memorial Day Sale is kicking off with DOUBLE rewards on Parts, Clothing and Accessories! Bike harder, go further and reward yourself twice!</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i.ibb.co/vYgLkWY/cyclist-bycicle-race-1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/hWxfTDn/banner.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container'>
                <h2 className='text-primary text-center mt-5 mb-4'>Our Products</h2>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        product3?.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <div className='text-center mt-4'>
                    <Link to='products' className='text-decoration-none' >See more <FaLongArrowAltRight></FaLongArrowAltRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;