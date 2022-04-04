import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => { 
        const [datas, setDatas] = useState();
        useEffect(()=> {
            fetch('../../../data.json')
            .then(res => res.json())
            .then(data => console.log(data));
        },[])
    return (
        <div>
            <div>
                {/* <BarChart width={730} height={250} data={data}> */}
                <BarChart width={730} height={250}> 
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashbord;