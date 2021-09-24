import React from 'react'
import { Box } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

function Journey() {
    return (
        <Center height={400} >
            <Box height={300} width={1000}  borderRadius={2} marginTop={5} marginBottom={20}>
                <Center marginTop={8}>
                    <Text fontSize="6xl" className="tittle">Our Journey</Text>
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
