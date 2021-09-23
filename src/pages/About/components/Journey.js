import React from 'react'
import { Box } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

function Journey() {
    return (
        <Center height={400} bg="#070805">
            <Box height={300} width={1000} bg="#0F0D0F" borderRadius={2} marginBottom={20} color="white">
                <Center marginTop={8}>
                    <Text fontSize="6xl" className="tittle" color="#b2cc1d">Our Journey</Text>
                </Center>
                <Center>
                    <Text width={700} align="center">
                    It has been two years since we entered university at 2020. It has been rough
                    with the pandemic still going around. Despite our limited daily lives, we still
                    eager learning at university. One year has passed, and we were assigned into Software Engineering Lab
                    at our faculty. Here we are now, two undergraduate students trying to develope a website
                    as our project. 
                    </Text>
                </Center>       
            </Box>
        </Center>
    )
}

export default Journey
