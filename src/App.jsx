import React from 'react';

import './App.scss';

import { useState } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(true); // gives a loading message
    setTimeout(() => {
      const data = {
        count: 2,
        results: [
          {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/squirtle'},
          {name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/blastoise'},
        ],
      };
      setData(data);
      setRequestParams(requestParams);
      setLoading(false);
    }, 1000);
  }

  //passing loading to Results to let it know when to display loading message
    return (
      <React.Fragment>
        <Header />
        <div className='CRUD'>Request Method: {requestParams.method}</div>
        <div className='URL'>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading}/> 
        <Footer />
      </React.Fragment>
    );
  
}

export default App;
