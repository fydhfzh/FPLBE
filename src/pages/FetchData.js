import { useState } from 'react';
import { Center } from "@chakra-ui/react"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button} from "@chakra-ui/react";  
import { Grid, GridItem } from "@chakra-ui/react"
import DataWidget from './Data/components/DataWidget';
import GraphDisplay from './Data/components/GraphDisplay';
import InputForm from './Data/components/InputForm';

const FetchData = (props) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [, setError] = useState(null);

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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const search = async () => {
    try {
    const response = await fetch('https://covid-19.dataflowkit.com/v1');
    const data = await response.json();
    // console.log(response);
    // setData(data[capitalize(input)].All);
    // setData(data[data.indexOf(capitalize(input))].Country_text);
    let countryId;
    for(var i = 0; i < data.length; i++){
      if(data[i].Country_text === capitalize(input)){
        countryId = i;
        break;
      }
      countryId = -1;
    }

    if(countryId !== -1) setData(data[countryId]);
    else setData([]);
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <Grid>
        <Center>
          <Grid marginTop={20} width={1000}>
          <GridItem>
              <InputForm handleSubmit={handleSubmit} input={input} setInput={setInput}/>
          </GridItem>

          <GridItem>
            <GraphDisplay data={data} />
          </GridItem>
          <GridItem marginTop={10}>
            {data? <DataWidget />:''}
          </GridItem>
        </Grid>
      </Center>
    </Grid>
    
  );
};

export default FetchData;