import React, {useState} from 'react'
import {
    FormControl,
    FormLabel
  } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Box, Center, Text } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IconButton } from "@chakra-ui/react"

 
function LoginForm() {
    const [passVis, setPassVis] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const togglePass = () => {
        setPassVis(!passVis);
    }

    return (
        <Box marginTop="115">
            <Center marginBottom={8}>
                <Text fontSize="2xl">Sign In</Text>
            </Center>
            <Center>
                <Box width={430} borderWidth={1} padding={6} borderRadius={8}>
                    <FormControl onSubmit={handleSubmit}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" id="email" marginBottom={5} />
                        <FormLabel>Password</FormLabel>
                        <Input type={passVis? "text" : "password"} id="pass"  />
                        <IconButton size={30} icon={passVis ? <MdVisibilityOff/> : <MdVisibility/>} onClick={togglePass}></IconButton>
                        <Text float="right" cursor="pointer" marginBottom={5}>Lupa password?</Text>
                        <Button width={380}>Masuk</Button>
                    </FormControl>
                    <Divider marginTop={5} orientation="horizontal" />
                    <Text marginTop={5} marginBottom={3}>Belum punya akun?</Text>
                    <Button width={380}>Buat Akun</Button>
                </Box>
            </Center>
        </Box>
      

       
    )
}

export default LoginForm
