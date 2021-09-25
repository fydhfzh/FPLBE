import React from 'react'
import { Flex, Box, Container, Divider, Stack, Text, Spacer, useDisclosure, Collapse, Link, AspectRatio, Heading} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

function VideoYt({isOpen, onToggle}) {
    return (
        <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px" onClick={onToggle}>
            <Text><strong>Popular COVID-19 News</strong> | How coronavirus is changing the world | DW Documentary</Text>
            <Text color="#a0b046" fontSize="15pt" cursor="pointer">Video</Text>
            <Collapse in={isOpen}>
                <AspectRatio ratio={16/9}>
                    <iframe
                        //https://www.youtube.com/embed/UrcDLopNPV8
                        title="coronavirus news"
                        src="https://www.youtube.com/embed/nnRZW0uk5LQ"
                        allowFullScreen
                     />
                </AspectRatio>
            </Collapse>
        </Box>
    )
}

export default VideoYt
