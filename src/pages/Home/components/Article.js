import React from 'react'
import { Flex, Text, Spacer, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Article() {
    return (
       
            <Link href="https://journals.lww.com/jcma/fulltext/2020/03000/the_outbreak_of_covid_19__an_overview.3.aspx" isExternal>
                        <Flex direction="row" alignItems="center">
                            <Text><strong>COVID-19 Readings</strong> | The outbreak of COVID-19: An overview</Text>
                            <Spacer/>
                            <ExternalLinkIcon />
                        </Flex>
                        <Text color="#a0b046" fontSize="15pt">Article</Text>
            </Link>
        
    )
}

export default Article
