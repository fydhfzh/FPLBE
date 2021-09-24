import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import Afdal from './Afdal'
import Fayyadh from './Fayyadh'


function Biodata() {
    return (
        <div>
            <Grid
             templateRows="repeat(2, 1fr)"
             borderLeftWidth={1}
             height={700}
             paddingLeft={4}>
                 <GridItem rowSpan={1} >
                     <Afdal />
                 </GridItem>
                 <GridItem rowSpan={1}>
                     <Fayyadh />
                 </GridItem>
            </Grid>
        </div>
    )
}

export default Biodata
