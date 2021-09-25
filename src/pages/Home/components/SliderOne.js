import React from 'react'
import {  Box, Heading } from '@chakra-ui/react'

function SliderOne() {
    return (
        <div>
            <Heading fontSize="15pt">What has COVID-19 taught you about disease and how do you think the world needs to prepare for pandemics in the future?</Heading>
                                <Box mt="10px" mb="10px">
                                    We need to look to having a better, safer, and fairer world post
                                    COVID. We need to be better prepared, we need to ensure every 
                                    person has genuine access to health care, we need to structure
                                    our societies so we reduce the things that increase the likelihood 
                                    and severity of pandemics, e.g. overcrowding, marginalisation, 
                                    inequity and last but not least we have to look after the health
                                    of our planet- climate change, the animal world, our forests.
                                </Box>
                                <Heading fontSize="15pt">What has COVID-19 taught the scientific community about working together and collaborating to achieve goals?</Heading>
                                <Box mt="10px">
                                    Right from the start the scientific community came together- heeded the 
                                    call WHO made when we activated the R&D Blueprint in the first week of 
                                    January 2020- and worked tirelessly, together sharing ideas, discoveries 
                                    and information- in true solidarity. The fruit of this solidarity is now 
                                    evident- good diagnostic tests, we know about which treatments work and of
                                    course we now have vaccines. Vaccines are giving us a second window of 
                                    opportunity to bring the pandemic under control. We must not squander it.
                                </Box>
        </div>
    )
}

export default SliderOne
