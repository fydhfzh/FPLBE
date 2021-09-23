import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import { Image, Box } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"


function Biodata() {
    return (
        <div>
            <Grid
             templateRows="repeat(2, 1fr)"
             height={700}>
                 <GridItem rowSpan={1} color="white">
                     Afdal
                 </GridItem>
                 <GridItem rowSpan={1} color="white">
                     Fayyadh
                 </GridItem>
            </Grid>
        </div>
    )
}

export default Biodata
