import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='container text-center'>
            <h2 className='text-primary text-center mt-5'>Our Products</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    products?.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;