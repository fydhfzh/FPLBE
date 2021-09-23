import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Routes from '../routes'
import { BrowserRouter as Router} from 'react-router-dom';
import DrawerNav from './DrawerNav';
import { IconButton, useColorMode, Flex } from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons';


function Navbar() {
    const { toggleColorMode } = useColorMode();
    const [btnIcon, setBtnIcon] = useState('light');
  
    const handleClick = () => {
        toggleColorMode();
        setBtnIcon((theme) => {
            if(theme === 'light') {
                return 'dark';
            }else return 'light';
        });
    }

    return (
        <div>
            <Router>
                <div>
                    <Flex className="navbar">
                            <div className="logo-container">
                                <Link to='/' className="logo">CVD</Link>  
                            </div> 
                            <IconButton aria-label="Search database" w="40px" h="40px" ml={3} mb={1} border="2px solid #fff" icon={btnIcon === 'light'? <SunIcon color="yellow"/> : <MoonIcon color="#fff"/>}  onClick={handleClick}></IconButton>
                            <DrawerNav/>
                    </Flex>
                </div>
                <Routes/>
            </Router>
        </div>
    )
}

export default Navbar
