import React from 'react';
import useMostSell from '../../hooks/useMostSell';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MostSell = () => {
    const [mostSells] = useMostSell()
    return (
        <div className='container'>
            <h3 className='text-primary text-center mt-5 mb-4'>Our Most Selling Bikes</h3>
            <div className='row row-cols-1 row-cols-md-3 ms-3'>
                {
                    mostSells?.map(mostSell =>
                        <div key={mostSell._id} class="card mb-3" style={{ width: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={mostSell?.image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{mostSell?.name}</h5>
                                        <p class="card-text">Ratings: {mostSell?.ratings} <div className='text-warning'><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></div></p>
                                        <p class="card-text"><small class="text-muted">Reviews: {mostSell.reviews}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
                <Link className='btn btn-link text-decoration-none mx-auto' to="/mostsells">See all <AiOutlineArrowRight></AiOutlineArrowRight> </Link>
            </div>
        </div>
    );
};

export default MostSell;