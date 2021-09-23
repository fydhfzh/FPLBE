import React from 'react'
import AboutUs from './components/AboutUs'
import Journey from './components/Journey'
import { Grid, GridItem } from "@chakra-ui/react"
import Footer from '../../parent_components/Footer'

export default function about() {
    return (
        <div>
            <Grid
            templateRows="repeat(3, auto)">
                <GridItem rowSpan={1}>
                    <AboutUs />
                </GridItem>
                <GridItem rowSpan={1}>
                    <Journey/>
                </GridItem>
                <GridItem rowSpan={1}>
                    <Footer/>
                </GridItem>
            </Grid>
            
            
        </div>
    )
}
