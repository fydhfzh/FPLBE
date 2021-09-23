import React from 'react';
import FetchData from '../FetchData';
import { Grid, Heading, Select } from '@chakra-ui/react';

function Data() {
    return (
        <Grid ml={40} mt="4%" padding="20px" w="100%" borderRadius="10px" background="gra" alignItems="center" direction="column">
            <FetchData />
        </Grid>
    )
}

export default Data
