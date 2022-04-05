import React from 'react';
import image from '../../Image/computer-1.png'
import './Home.css';
const Home = () => {
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

            <div className='customer-review-container text-center'>
                <h1 className='text-4xl  font-bold  mt-40 mb-10'>Customer Review </h1>
                <div className='some-reviews '>

                </div>
                <button className='text-bold text-white bg-blue-400 p-3 rounded-lg text-xl my-6 '>See All Reviews </button>
            </div>
        </div>
    );
};

export default Home;