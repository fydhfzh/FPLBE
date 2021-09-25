import React from 'react'
import { BarChart, Bar, XAxis, YAxis,  Tooltip } from 'recharts';



function GraphStats({data}) {
    const Data =[
        {
            name:"Cases",
            Total: parseInt(data["Total Cases_text"].replace(/,/g,'')),
           
        },
        {
            name:"Deaths",
            Total: parseInt(data["Total Deaths_text"].replace(/,/g,'')),
            
        },
        {
            name:"Recovered",
            Total: parseInt(data["Total Recovered_text"].replace(/,/g,'')),
        
        }
    ]    
    
    return (
        <div>
          
            <BarChart width={500} height ={400} data={Data} barSize={50}
                barCategoryGap={0}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>            
                   <Tooltip 
                    />    
                    <XAxis dataKey="name" fontSize="15px"/>
                    <YAxis fontSize="12px"/>
                    <Bar dataKey="Total" fill="#8884d8" />
                  
            </BarChart>  
        </div>
       
     
    )
}

export default GraphStats
