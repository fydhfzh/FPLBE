import React from 'react'
import GraphStats from './GraphStats';
import GraphNew from './GraphNew';
import { Center, Square, Circle, Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";  
import { HStack } from "@chakra-ui/react";


function GraphDisplay({data}) {
    return (
        <div>
             <HStack spacing="30px" marginTop={10}>
              <Box>
                {data ? 
                 <div>
                 <Center>
                 <Text fontSize="2xl">Total</Text>
                 </Center>
                 <GraphStats data={data}/>
               </div>
                : ''}
              </Box>
              <Box>
                {data ? 
                <div>
                  <Center>
                  <Text fontSize="2xl">New</Text>
                  </Center>
                  <GraphNew data={data}/>
                </div>
                 : ''}
              </Box>
            </HStack>
        </div>
    )
}

export default GraphDisplay
