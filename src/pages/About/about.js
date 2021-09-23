import React from 'react'
import AboutUs from './components/AboutUs'
import { Grid, GridItem } from "@chakra-ui/react"
import Journey from './components/Journey'
import { Image, Box } from "@chakra-ui/react"
import Footer from '../../parent_components/Footer'

export default function about() {
    return (
        <Grid>
            <GridItem >
                 <AboutUs />
            </GridItem>
            <GridItem>
                <Journey />
            </GridItem>
            <GridItem>
                <Footer/>
            </GridItem>
        </Grid>
        

    )
}
