import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
function GraphStats({data}) {

    console.log(data['Active Cases_text']);

    const Data =[
        {
            name:"Active Cases",
            uv:Number(data[5])
        },
        {
            name:"Deaths",
            uv:data.deaths
        },
        {

        },
        {

        },
        {

        }
    ]

    return (
        <div>
            <BarChart width={500} height ={400} data={Data} barSize={50}>
                <Bar dataKey="uv" fill="#8884d8" />
                {/* <Tooltip />
                <Legend /> */}
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" fontSize="15px"/>
                <YAxis fontSize="12px"/>
           </BarChart>  
        </div>
    )
}

export default GraphStats
