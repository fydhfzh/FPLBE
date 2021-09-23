import React from 'react';
import FetchData from '../FetchData';
<<<<<<< HEAD


function Data() {
   
    return (
        <div>
            <h1>Data statistik covid per-bulan</h1>
            <div className="graph-container">
                <FetchData />
             </div>
        </div>
        
=======
import { Grid, Heading, Select } from '@chakra-ui/react';

function Data() {
    return (
        <Grid ml={40} mt="4%" padding="20px" w="100%" borderRadius="10px" background="gra" alignItems="center" direction="column">
            <FetchData />
        </Grid>
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
    )
}

export default Data
