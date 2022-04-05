import React from 'react';
import useReview from '../../useReview/useReview';
import AllHook from '../AllHook/AllHook';
import './Reviews.css'

const Reviews = () => {
    const [hook, setHook] = useReview();
    console.log(hook);
    return (
        <div>
            <h1 className='text-center font-bold text-2xl mt-28  '>See the all reviews for this  desktop pc  </h1>
            <div className='review-container'>
                {
                    hook.map(hk => <AllHook hk ={hk} key={hk.id}></AllHook>)
                }
            </div>
        </div>
    );
};

export default Reviews;