import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import MostSell from '../MostSell/MostSell';

const Home = () => {
    const [products] = useProducts();
    const product3 = products?.slice(0, 3);

    return (
        <div>
            <Banner></Banner>
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
            <Services></Services>
            <MostSell></MostSell>
        </div>
    );
};

export default Home;