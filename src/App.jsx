import './App.scss';

import { useState, useEffect, useReducer } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

export const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [], // added for lab 29
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
        requestParams: action.payload,
      };
    case 'FINISH':
      return {
        ...state,
        loading: false,
        data: action.payload,
        history: [...state.history, state.requestParams], //copilot added this 
      }
      //do we need a case for history?
    default:
      return state;
  }
};


const App = () => { // may convert to function component later to see bugs easier

  const [state, dispatch] = useReducer(requestReducer, initialState)

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('API data was grabbed');
    async function getData() {
      if (requestParams.method === 'get') {
        let response = await axios.get(`https://pokeapi.co/api/v2/${requestParams.url}`); //requestParams.url if we want to access different endpoints at pokemon API, can update this to be more dynamic
        setData(response.data.results);
      }
      if (requestParams.method === 'post') {
        let response = await axios.post(`https://pokeapi.co/api/v2/${requestParams.url}`); //requestParams.url if we want to access different endpoints at pokemon API, can update this to be more dynamic
        setData(response.data.results);
      }
      if (requestParams.method === 'put') {
        let response = await axios.put(`https://pokeapi.co/api/v2/${requestParams.url}`); //requestParams.url if we want to access different endpoints at pokemon API, can update this to be more dynamic
        setData(response.data.results);
      }
      if (requestParams.method === 'delete') {
        let response = await axios.delete(`https://pokeapi.co/api/v2/${requestParams.url}`); //requestParams.url if we want to access different endpoints at pokemon API, can update this to be more dynamic
        setData(response.data.results);
      }
    }
    if (requestParams.url && requestParams.method) {
      getData();
    }

  }, [requestParams]);

  const callApi = (requestParams) => {
    setLoading(true); // gives a loading message
    setTimeout(() => {
      setRequestParams(requestParams);
      setLoading(false);
    }, 500);
  }

  //passing loading to Results to let it know when to display loading message
  return (
    <>
      <Header />
      <div data-testid='test-method' className='CRUD'>Request Method: {requestParams.method}</div>
      <div data-testid='test-url' className='URL'>URL:{`https://pokeapi.co/api/v2/${requestParams.url}`}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );

}

export default App;
