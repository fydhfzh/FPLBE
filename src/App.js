import React from 'react'
import './App.css';
import './index.css';
import Navbar from './parent_components/Navbar';
import Footer from './parent_components/Footer';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
        <Navbar initialColorMode='light'/>
        <Footer />
    </ChakraProvider>
      
  )
}

export default App;
