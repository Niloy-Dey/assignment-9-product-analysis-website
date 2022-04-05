import React from 'react';
import './HomeReview.css'
const HomeReview = (props) => {
    const{name, comment, ratings} = props.hr;
    return (
        <div>
             <div className='p-5 border-2 text-xl single-review'>
                <h1><span className='font-bold'>Name: </span>{name} </h1>
                <h3><span className='font-bold'>comment:</span> {comment} </h3>
                <h4><span className='font-bold'>Rating:</span> {ratings}</h4>
             </div>
        </div>
    );
};

export default HomeReview;