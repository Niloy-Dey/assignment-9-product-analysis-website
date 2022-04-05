import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='flex justify-between m-20'>
            <div>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey='investment'/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="month" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
                <h1 className='mt-10 text-center font-bold text-green-500 text-2xl '> <u>Bar chart</u></h1>
            </div>
            <div>
                <PieChart width={750} height={300} data={data}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
                <h1 className='text-center font-bold text-green-500 text-2xl '> <u>Pie chart</u></h1>
            </div>
        </div>
    );
};

export default Dashbord;