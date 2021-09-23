import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Routes from '../routes'
import { BrowserRouter as Router} from 'react-router-dom';
import DrawerNav from './DrawerNav';
import { IconButton, useColorMode, useColorModeValue, Flex } from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons';


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navbarBackground = useColorModeValue("#b2cc1d","#070805");

    return (
        <div>
            <Router>
                    <Flex className="navbar" background={navbarBackground} borderBottom="2px solid #fff">
                            <div className="logo-container">
                                <Link to='/' className="logo">CVD</Link>  
                            </div> 
                            <IconButton aria-label="Search database" w="40px" h="40px" ml={3} mb={1} border="1px solid #fff" icon={colorMode=== 'light'? <SunIcon /> : <MoonIcon />}  onClick={toggleColorMode}></IconButton>
                            <DrawerNav/>
                    </Flex>
                <Routes/>
            </Router>
        </div>
    )
}

export default Navbar