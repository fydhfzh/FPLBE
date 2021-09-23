import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
function GraphStats({data}) {
    const Data =[
        {
            name:"Confirmed",
            uv:data.confirmed,
        },
        {
            name:"Deaths",
            uv:data.deaths
        }
    ]
<<<<<<< HEAD
    return (
        <div>
            {data.confirmed}
=======

    return (
        <div>
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
            <BarChart width={500} height ={400} data={Data} barSize={50}>
                <Bar dataKey="uv" fill="#8884d8" />
                {/* <Tooltip />
                <Legend /> */}
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
<<<<<<< HEAD
                <XAxis dataKey="name" fontSize="12px"/>
                <YAxis fontSize="12px"/>
           </BarChart>
=======
                <XAxis dataKey="name" fontSize="15px"/>
                <YAxis fontSize="12px"/>
           </BarChart>  
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
        </div>
    )
}

export default GraphStats
