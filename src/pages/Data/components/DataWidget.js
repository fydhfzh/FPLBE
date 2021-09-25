import React from 'react'
import { Center, Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";  

function DataWidget() {
    return (
        <div>
            <Center>
                <Text fontSize="2xl">Countries Detail</Text>
            </Center>
            <Center>
                <Box>
                    <iframe src="https://covid-19.dataflowkit.com/assets/widget/c19-top-widget-dark.html"
                    width="800" height="540" frameborder="0"></iframe>
                </Box>
            </Center>
        </div>
        
    )
}

export default DataWidget
