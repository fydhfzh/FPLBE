import React from 'react';
import FetchData from '../FetchData';


function Data() {
   
    return (
        <div>
            <h1>Data statistik covid per-bulan</h1>
            <div className="graph-container">
                <FetchData />
             </div>
        </div>
        
    )
}

export default Data
