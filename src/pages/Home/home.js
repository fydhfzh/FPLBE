import React from 'react'
import { Flex, Box, Container, Divider, Stack, Text, Spacer, useDisclosure, Collapse, Link, AspectRatio, Heading} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Home() {
    const { isOpen, onToggle } = useDisclosure();


    return (
        <Container mt="5%" maxW="1000px" fontFamily="Poppins">
            <Box fontSize="50pt" fontFamily="Montserrat" bgGradient='linear(to-r, #b2cc1d 48%, #a0b046)' bgClip='text'>Hello There!</Box>
            <Container fontFamily="Poppins" fontSize="20pt">
                This website is one of the tool you can use for free to get worldwide information
                 about COVID-19 cases & data today.
            </Container>
            <Divider h="30px"/>
            <Box fontSize="30pt" fontFamily="Montserrat" bgGradient='linear(to-r, #b2cc1d 48%, #a0b046)' bgClip='text'>Highlight</Box>
            <Stack>
                <Spacer/>
                <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px" onClick={onToggle}>
                    <Text><strong>Popular COVID-19 News</strong> | How coronavirus is changing the world | DW Documentary</Text>
                    <Text color="#a0b046" fontSize="15pt">Video</Text>
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
                <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px">
                    <Link href="https://journals.lww.com/jcma/fulltext/2020/03000/the_outbreak_of_covid_19__an_overview.3.aspx" isExternal>
                        <Flex direction="row" alignItems="center">
                            <Text><strong>COVID-19 Readings</strong> | The outbreak of COVID-19: An overview</Text>
                            <Spacer/>
                            <ExternalLinkIcon />
                        </Flex>
                        <Text color="#a0b046" fontSize="15pt">Article</Text>
                    </Link>
                </Box>
                <Box border="1px solid" borderColor="#b2cc1d" borderRadius="10px" padding="20px">
                    <Text><strong>Experts Thought about COVID-19 Pandemic</strong> | How to protect yourself from COVID-19</Text>
                    <Text color="#a0b046" fontSize="15pt">Slider</Text>
                    <Tabs variant="enclosed" isFitted>
                        <TabList>
                            <Tab>Dr. Soumya Swaminathan</Tab>
                            <Tab>Dr. Kieran Walsh</Tab>
                            <Tab>Thabani Maphosa</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
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
                            </TabPanel>
                            <TabPanel>
                                <Heading fontSize="15pt">What has COVID-19 taught you/your industry about disease and how do you think the world needs to prepare for pandemics in the future?</Heading>
                                <Box mt="10px" mb="10px">
                                    BMJ’s vision is to help achieve a healthier world. We do this through publishing
                                    research, providing medical education and clinical decision support, and driving
                                    quality improvement in healthcare. COVID-19 has affected all of these activities.
                                    It has taught us the importance of publishing research quickly in a fast changing
                                    scientific environment. But we know we must also ensure that the research is of 
                                    high quality and reliable. Our medical education and decision support tools have
                                    always been continually updated, but the COVID pandemic has reinforced the importance
                                    of having updating processes that take into account new evidence on a daily basis. 
                                    Lastly the COVID pandemic has shown us once again that our users expect our content
                                    to be practical and to help answer their patients’ questions and solve their problems.
                                    This is challenging as the volume of scientific research is very great and there are
                                    ongoing questions about diagnosis, investigation, management, and prevention. However
                                    we remain committed to ensuring that our resources answer questions that will enable
                                    continuous clinical quality improvement.
                                </Box>
                                <Heading fontSize="15pt">What has COVID-19 taught the scientific community about working together and collaborating to achieve goals?</Heading>
                                <Box mt="10px">
                                    The COVID pandemic has shown the importance of collaboration to achieve the goals of 
                                    effective diagnosis, treatment, and prevention of disease. This has required collaboration
                                    between primary care and secondary care; between doctors, nurses, and allied healthcare
                                    practitioners; and between the scientific community and clinicians on the frontline. Many
                                    patients with COVID-19 also have comorbidities and it is these patients who are often the
                                    most seriously ill. The management of patients with comorbidities requires a collaborative
                                    and team-based approach to achieve the holistic care that patients need. We have recently
                                    launched a new tool – BMJ Best Practice Comorbidities – to help interdisciplinary teams of
                                    healthcare professionals treat a patient’s infection with COVID-19 and associated comorbidities.
                                    This has proved vital during the pandemic - and will continue to be used into the future to help
                                    the growing number of patients with multiple communicable and non-communicable diseases.
                                </Box>
                            </TabPanel> 
                            <TabPanel>
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
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
                </Box>
            </Stack>   
        </Container>
    )
}
