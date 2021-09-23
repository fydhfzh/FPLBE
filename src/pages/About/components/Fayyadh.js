import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import { Image, Box } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react"
import { GrFacebookOption, GrInstagram, GrLinkedin } from 'react-icons/gr'

function Fayyadh() {
    return (
        <Grid
        templateColumns="repeat(3, 1fr)">
        <GridItem marginTop={5} colSpan={1}>
            <Image src="Afdal_img.jpg" alt="foto_afdal" boxSize={300}/>
        </GridItem>
        <GridItem colSpan={2} padding={10}>
            <Text fontSize="2xl">Fayyadh Hafizh</Text>
            <Text marginTop={5} align="justify">
               Halo
            </Text>
            <Text color="#d3d6bf" marginTop={5}>CONTACT</Text>
                <Grid
                templateColumns="repeat(3, 35px)"
                marginTop={3}
                >
                    <GridItem rowSpan={1}>
                        <GrFacebookOption onClick={() => {window.open("https://www.facebook.com/afdal.abdallah/")}} cursor="pointer" color="white" size="24px" alt="fb"/>
                    </GridItem>
                    <GridItem rowSpan={1}>
                        <GrInstagram onClick={()=>{window.open("https://www.instagram.com/afdalabdallah/")}} cursor="pointer" color="white" size="24px" alt="ig"/>
                    </GridItem>
                    <GridItem rowSpan={1}>
                        <GrLinkedin onClick={()=>{window.open("https://www.linkedin.com/in/muhammad-afdal-abdallah-808183201/")}} cursor="pointer" color="white" size="24px" alt="lk" />
                    </GridItem>
                </Grid>
        </GridItem>
        </Grid>
    )
}

export default Fayyadh
