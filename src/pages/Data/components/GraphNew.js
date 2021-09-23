import React from 'react'
import { BarChart, Bar,  XAxis, YAxis, Tooltip,   } from 'recharts';



function GraphNew({data}) {
    const Data =[
        {
            name:"Cases",
            New: parseInt(data["New Cases_text"].replace(/,/g,'')),
           
        },
        {
            name:"Deaths",
            New: parseInt(data["New Deaths_text"].replace(/,/g,'')),
            
        }
    ]    
    console.log(Data[0].Total);
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
                    <Bar dataKey="New" stackId="a" fill="#82ca9d" />
            </BarChart>  
        </div>
       
     
    )
}

export default GraphNew
