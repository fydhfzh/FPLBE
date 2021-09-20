import React from 'react';
import { useDisclosure } from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
import { HamburgerIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { Box, VStack, StackDivider, HStack } from "@chakra-ui/react";

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <HamburgerIcon className="burger-icon" ref={btnRef} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#d3d6bf">
            <DrawerCloseButton />
            <DrawerHeader>CVD</DrawerHeader>
  
            <DrawerBody>
              <VStack divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              >
                <Box>
                    <Link to='/' onClick={onClose}>Home</Link> 
                </Box>
                <Box>
                    <Link to='/login' onClick={onClose}>Log In</Link>
                </Box>
              </VStack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth="1px">
               <HStack>
                    <Box>
                       <InfoIcon className="info-button" cursor="pointer"/>
                    </Box>
                    <Box>
                        <Link to='/about' onClick={onClose}>About</Link>
                    </Box>
                 </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample;