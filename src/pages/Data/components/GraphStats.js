import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
function GraphStats({data}) {
    return (
        <div>
            {data.confirmed}
            <LineChart width={1000} height ={400} data={data}>
                <Line type="monotone" dataKey="deaths" stroke="#8884d8" strokeWidth="3" />
                {/* <Line type="monotone" dataKey="uv" stroke="red" strokeWidth="3" /> */}
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" fontSize="12px"/>
                <YAxis fontSize="12px"/>
           </LineChart>
        </div>
    )
}

export default GraphStats
