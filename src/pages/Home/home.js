import React from 'react'
import { Box, Container, Stack,Spacer, useDisclosure } from '@chakra-ui/react'
import OpeningHead from './components/OpeningHead';
import VideoYt from './components/VideoYt';
import Slider from './components/Slider';
import Article from './components/Article';
import Footer from '../../parent_components/Footer';

export default function Home() {
    const { isOpen, onToggle } = useDisclosure();


    return (
        <Container mt="5%" maxW="1000px" fontFamily="Poppins">
            <OpeningHead/>
            <Stack>
                <Spacer/>
                <VideoYt isOpen={isOpen} onToggle={onToggle}/>
                <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px">
                    <Article/>
                </Box>
                <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px">
                    <Slider />
                </Box>
            </Stack>  
            <Box marginTop={50}>
                <Footer />
            </Box> 
        </Container>
    )
}
