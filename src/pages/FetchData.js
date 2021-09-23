<<<<<<< HEAD
import { useEffect, useState } from 'react';
import GraphStats from './Data/components/GraphStats';

const FetchData = () => {
=======
import { useState } from 'react';
import GraphStats from './Data/components/GraphStats';
import {
  Box,
  Spacer,
  Flex,
  FormControl,
  FormLabel,
  Spinner,
  Input,
  Button,
  ButtonGroup
} from "@chakra-ui/react";  
import { Label } from 'recharts';

const FetchData = (props) => {
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('https://covid-api.mmediagroup.fr/v1/cases%27)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => setData(data))
  //     .catch((error) => {
  //       console.error(error);
  //       setError(error);
  //     });

  //   console.log(data);
  // }, []);

<<<<<<< HEAD
=======
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
  const search = async () => {
    try {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
    const data = await response.json();
    // console.log(response);
<<<<<<< HEAD

    setData(data[input].All);
    } catch (error) {
      alert(error);  
=======
    setData(data[capitalize(input)].All);
    } catch (error) {
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
<<<<<<< HEAD
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {data ? <GraphStats data={data}/> : <p>Loading...</p>}
      
    </div>
=======
    <Flex direction="row" width="25%">
        <FormControl onSubmit={handleSubmit} border="2px solid #b2cc1d" borderRadius="10px" padding="20px" >
            <FormLabel fontSize="20pt">Select country</FormLabel>
            <Input
            w="90%"
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Search country for COVID-19 information'
            />
            <Button mt={3} ml={1} background="#a0b046" type='submit' onClick={handleSubmit}>Search</Button>
      </FormControl>
      <Box>
        {data && <GraphStats data={data}/>}
      </Box>
    </Flex>
>>>>>>> eebad88b1e74308abfefab2a833ff093a42d949b
  );
};

export default FetchData;