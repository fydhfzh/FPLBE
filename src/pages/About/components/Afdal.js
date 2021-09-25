import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { GrFacebookOption, GrInstagram, GrLinkedin } from 'react-icons/gr'

function Afdal() {
 
    return (
        <Grid 
        templateColumns="repeat(3, 1fr)">
        <GridItem marginTop={10} colSpan={1}>
            <Image src="Afdal_img.jpg" alt="foto_afdal" boxSize={300}/>
        </GridItem>
        <GridItem colSpan={2} marginTop={5} padding={10}>
            <Text fontSize="2xl">Muhammad Afdal Abdallah</Text>
            <Text marginTop={5} align="justify">
                I am a second-year Informatics students in Institut Teknologi Sepuluh Nopember, Surabaya.
                 Loves to learn new things, especially in programming.
                 I'm currently learning and trying to master HTML, CSS, JS and React,js . 
                Besides programming, I usually read novels and play games in my freetime.
            </Text>
            <Text  marginTop={5}>CONTACT</Text>
                <Grid
                templateColumns="repeat(3, 35px)"
                marginTop={3}
                >
                    <GridItem rowSpan={1}>
                        <GrFacebookOption onClick={() => {window.open("https://www.facebook.com/afdal.abdallah/")}} cursor="pointer" size="24px" alt="fb"/>
                    </GridItem>
                    <GridItem rowSpan={1}>
                        <GrInstagram onClick={()=>{window.open("https://www.instagram.com/afdalabdallah/")}} cursor="pointer" size="24px" alt="ig"/>
                    </GridItem>
                    <GridItem rowSpan={1}>
                        <GrLinkedin onClick={()=>{window.open("https://www.linkedin.com/in/muhammad-afdal-abdallah-808183201/")}} cursor="pointer" size="24px" alt="lk" />
                    </GridItem>
                </Grid>
        </GridItem>
        </Grid>
    )
}

export default Afdal
