import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
function GraphStats() {
    const data = [{name: 'A', uv: 0, pv: 240}, {name: 'B', uv:300, pv:220}, {name: "C", uv: 200, pv: 250}]
    return (
        <div>
            <LineChart width={1000} height ={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" fontSize="12px"/>
                <YAxis fontSize="12px"/>
           </LineChart>
        </div>
    )
}

export default GraphStats
