import React from 'react'
import { Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import SliderOne from './SliderOne';
import SliderThree from './SliderThree';
import SliderTwo from './SliderTwo';

function Slider() {
    return (
        <div>
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
                                <SliderOne/>
                            </TabPanel>
                            <TabPanel>
                                <SliderTwo />
                            </TabPanel> 
                            <TabPanel>
                               <SliderThree/>
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
        </div>
    )
}

export default Slider
