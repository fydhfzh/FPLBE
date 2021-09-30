import React from 'react'
import { Box, Text, Collapse, AspectRatio} from '@chakra-ui/react'

function VideoYt({isOpen, onToggle}) {
    return (
        <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px" onClick={onToggle}>
            <Text><strong>Popular COVID-19 News</strong> | How coronavirus is changing the world | DW Documentary</Text>
            <Text color="#a0b046" fontSize="15pt" cursor="pointer">Video</Text>
            <Collapse in={isOpen}>
                <AspectRatio ratio={16/9}>
                    <iframe
                        title="coronavirus news"
                        src="https://www.youtube.com/embed/UrcDLopNPV8"
                        allowFullScreen
                     />
                </AspectRatio>
            </Collapse>
        </Box>
    )
}

export default VideoYt
