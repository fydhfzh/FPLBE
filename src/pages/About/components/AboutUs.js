import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Divider } from '@chakra-ui/layout'
import Biodata from './Biodata'


function AboutUs() {
    return (
        <div>
            <Grid
                h="700px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                >
                <GridItem rowSpan={1}> 
                   <Box padding={12}  marginTop={20} marginLeft={10}>
                    <Text fontSize="6xl" className="tittle">About Us</Text>
                    <Text fontSize="2xl">Second-year Informatics students at Institut Teknologi Sepuluh Nopember, Surabaya, who are eager to learn Software Engineering.</Text>
                   </Box>
                </GridItem>   
                <GridItem rowSpan={2} >
                        <Biodata/>    
                </GridItem>
                <GridItem rowSpan={1}  >  
                   <Text padding={12} marginTop={10} marginLeft={10}>
                    Software Engineering has been our interest since entering University.
                    Having a chance to learn something new is what we are looking for.
                    While studying at University, we try to learn Web Development.
                    Using React.js as the base of our project, we slowly start making 
                    websites.
                   </Text>
                </GridItem>
             
            </Grid>
        </div>
    )
}

export default AboutUs
