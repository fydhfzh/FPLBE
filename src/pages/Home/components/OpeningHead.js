import React from 'react'
import { Flex, Box, Container, Divider, Stack, Text, Spacer, useDisclosure, Collapse, Link, AspectRatio, Heading} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

function OpeningHead() {
    return (
        <div>
            <Box fontSize="50pt" fontFamily="Montserrat" bgGradient='linear(to-r, #b2cc1d 48%, #a0b046)' bgClip='text'>Hello There!</Box>
            <Container fontFamily="Poppins" fontSize="20pt">
                This website is one of the tool you can use for free to get worldwide information
                 about COVID-19 cases & data today.
            </Container>
            <Divider h="30px"/>
            <Box fontSize="30pt" fontFamily="Montserrat" bgGradient='linear(to-r, #b2cc1d 48%, #a0b046)' bgClip='text'>Highlight</Box>
        </div>
    )
}

export default OpeningHead
