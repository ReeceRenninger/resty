import React from 'react';

import './App.scss';

import { useState } from 'react';
// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
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
          {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          {name: 'fake thing 2', url: 'http://fakethings.com/2'},
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
