import React from 'react';

const AllHook = (props) => {
    const {hk}=props.hk;
    console.log(hk);
    return (
        <div>
            <h1>hooks{hk.lenght} </h1>
        </div>
    );
};

export default AllHook;