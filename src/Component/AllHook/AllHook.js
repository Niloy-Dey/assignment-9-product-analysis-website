import React from 'react';

const AllHook = (props) => {
    const {name, comment,ratings}=props.hk;
    console.log(name, comment);
    return (
        <div className='p-5 border-2 text-xl '>
            <h1><span className='font-bold'>Name: </span>{name} </h1>
            <h3><span className='font-bold'>comment:</span> {comment} </h3>
            <h4><span className='font-bold'>Rating:</span> {ratings}</h4>
        </div>
    );
};

export default AllHook;