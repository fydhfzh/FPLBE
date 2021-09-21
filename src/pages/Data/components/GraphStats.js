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
    return (
        <div>
            {data.confirmed}
            <BarChart width={500} height ={400} data={Data} barSize={50}>
                <Bar dataKey="uv" fill="#8884d8" />
                {/* <Tooltip />
                <Legend /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize="12px"/>
                <YAxis fontSize="12px"/>
           </BarChart>
        </div>
    )
}

export default GraphStats
