import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../Image/computer-1.png'
import useReview from '../../useReview/useReview';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css';
const Home = () => {

    const [hook, setHook] = useReview();
    const someReview = hook.slice(0, 3);

    let navigate = useNavigate();
    const seeAllReview = () =>{
        let path = '/Reviews';
        navigate(path);
    }
    return (
        <div>
            <div className='home-container mt-28 mx-20'>
                <div className="text-container flex  justify-between items-center">
                    <div>
                        <h1 className='text-6xl  font-bold my-3'>Latest Desktop Computer <br /> <span className='text-blue-600'>Your Best choice </span></h1>
                        <p className='font-bold text-xl '>This is latest technology desktop personal computer in the year. HD Ultra display.
                            <br /> A desktop computer is a personal computing device designed to fit on top of a typical office desk.
                            It houses the physical hardware that makes a computer run and connects to input devices such as the monitor,
                            <br /> keyboard and mouse users interact with. </p>
                        <button className='text-bold text-white bg-blue-400 p-4 rounded-lg text-xl my-6 '>Live Demo</button>
                    </div>
                </div>
                <div className="image-container">
                    <img className='image-design' src={image} alt="" />
                </div>
            </div>
 {/* ======================================================
                review container start here 
 ========================================================== */}
            <div className='customer-review-container '>
                <h1 className='text-4xl text-center  font-bold  mt-40 mb-10'>Customer Review </h1>
                <div className='some-reviews '>
                        {
                            someReview.map(hr => <HomeReview key={hr.id} hr={hr}></HomeReview> )
                        } 
                </div>
                <div className='text-center'>
                <button onClick={seeAllReview} className='text-bold  text-white bg-blue-400 p-3 rounded-lg text-xl my-6 '>See All Reviews </button>
                </div>
            </div>
        </div>
    );
};

export default Home;