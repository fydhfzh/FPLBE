import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button} from "@chakra-ui/react"; 

function InputForm({handleSubmit, input, setInput}) {
    return (
        <FormControl onSubmit={handleSubmit} border="2px solid #b2cc1d" borderRadius="10px" padding="20px">
                  <FormLabel fontSize="20pt">Select country</FormLabel>
                  <Input
                  w="90%"
                  type='text'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Search country for COVID-19 information'
                  />
                  <Button mb={4} mt={3} ml={2} background="#a0b046" type='submit' onClick={handleSubmit}>Search</Button>
        </FormControl>
    )
}

export default InputForm
