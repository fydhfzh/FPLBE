import React from 'react'
import { Link } from 'react-router-dom';
import Routes from '../routes'
import { BrowserRouter as Router} from 'react-router-dom';
import DrawerNav from './DrawerNav';
import { IconButton, useColorMode, useColorModeValue, Flex } from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons';


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navbarBorder = useColorModeValue("#b2cc1d", "#fff");
    const navbarBg = useColorModeValue("#fff","#1a202c");

    return (
        <div>
            <Router>
                    <Flex className="navbar" background={navbarBg} borderBottom="3px solid" borderColor={navbarBorder}>
                            <div className="logo-container">
                                <Link to='/' className="logo">CVD</Link>  
                            </div> 
                            <IconButton aria-label="Search database" w="40px" h="40px" ml={3} mb={1} icon={colorMode=== 'light'? <SunIcon /> : <MoonIcon />}  onClick={toggleColorMode}></IconButton>
                            <DrawerNav drawerBg={navbarBg}/>
                    </Flex>
                <Routes/>
            </Router>
        </div>
    )
}

export default Navbar