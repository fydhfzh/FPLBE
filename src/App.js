import React from 'react'
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <ChakraProvider>
        <Navbar />
    </ChakraProvider>
      
  )
}

export default App;
