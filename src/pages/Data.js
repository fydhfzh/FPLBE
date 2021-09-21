import React from 'react';
import GraphStats from '../components/GraphStats';


function Data() {
   
    return (
        <div>
            <h1>Data statistik covid per-bulan</h1>
            <div className="graph-container">
                <GraphStats/>     
             </div>
        </div>
        
    )
}

export default Data
