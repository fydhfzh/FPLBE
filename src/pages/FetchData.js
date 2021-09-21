import { useEffect, useState } from 'react';
import GraphStats from './Data/components/GraphStats';

const FetchData = () => {
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

  const search = async () => {
    try {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
    const data = await response.json();
    // console.log(response);

    setData(data[input].All);
    } catch (error) {
      alert(error);  
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
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
  );
};

export default FetchData;