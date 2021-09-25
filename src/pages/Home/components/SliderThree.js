import React from 'react'
import {  Box, Heading } from '@chakra-ui/react'


function SliderThree() {
    return (
        <div>
            <Heading fontSize="15pt">What has COVID-19 taught you/your industry about disease and how do you think the world needs to prepare for pandemics in the future?</Heading>
                                <Box mt="10px" mb="10px">
                                    One key lesson that we’ve learned from this pandemic is that nobody is safe until everyone is
                                    safe because infectious diseases do not respect borders. Therefore, global equitable access 
                                    to vaccines, particularly protecting health care workers and those most-at-risk – wherever they are,
                                    and whatever their income level – is the only way to lessen the public health and economic impact
                                    of the pandemic on individuals, communities, and nations.
                                    This is why the COVAX Facility was set up. COVAX is a global collaboration co-led by Gavi,
                                    the Centre for Epidemic Preparedness Innovations (CEPI) and WHO – working in partnership
                                    with participating countries governments, vaccine manufacturers, UNICEF, the World Bank, and others.

                                    This unprecedented international collaboration in terms of technological innovation, funding
                                    for vaccines and new models of public-private cooperation to enable rapid roll-out of vaccines
                                    once doses are delivered is going to be a valuable learning for future pandemics.
                                </Box>
                                <Heading fontSize="15pt">What has COVID-19 taught the scientific community about working together and collaborating to achieve goals?</Heading>
                                <Box mt="10px">
                                    Ensuring access to vaccines during a global pandemic is different to at any other because the vaccine
                                    is needed everywhere on a similar timescale. Rich and poor countries are affected and therefore questions
                                    around pricing, manufacturing and overall supply become much more complex.

                                    While we have started delivering the first doses and this is already faster than when compared to the H1N1
                                    last pandemic experience, our work is not done yet and the world must continue to work together if we are
                                    to successfully deliver on our mission.

                                    COVID-19 has taught us that to address the complexities that lie ahead – from regulatory approvals to readiness 
                                    and capacity, supply fluctuations to delivery and logistics or funding – the scientific and medical community must 
                                    all work together if we are to successfully deliver on the largest global vaccine rollout in history.
                                </Box>
        </div>
    )
}

export default SliderThree
