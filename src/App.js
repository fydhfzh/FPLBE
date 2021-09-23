import React from 'react'
import './App.css';
import './index.css';
import Navbar from './parent_components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import Footer from './parent_components/Footer';


function App() {
  return (
    <ChakraProvider>
        <Navbar />
    </ChakraProvider>
      
  )
}

export default App;
