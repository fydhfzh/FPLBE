import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import { GrFacebookOption, GrInstagram, GrLinkedin } from 'react-icons/gr'


function Footer() {
    return (
        <Box  height={300} bg="#070805" >
            <Center>
                <Box height={300} width={1300} borderTopWidth={1} borderTopColor="#d3d6bf">
                    <Box marginLeft={100} marginTop={70} width={300}>
                         <Text color="#d3d6bf">FOLLOW US</Text>
                         <Grid
                         templateColumns="repeat(3, 35px)"
                         marginTop={3}
                         >
                             <GridItem rowSpan={1}>
                                <GrFacebookOption color="white" size="24px" alt="fb"/>
                             </GridItem>
                             <GridItem rowSpan={1}>
                                 <GrInstagram color="white" size="24px" alt="ig"/>
                             </GridItem>
                             <GridItem rowSpan={1}>
                                <GrLinkedin color="white" size="24px" alt="lk" />
                             </GridItem>
                         </Grid>
                    </Box>
                            
                </Box>
            </Center>
            
        </Box>
    )
}

export default Footer