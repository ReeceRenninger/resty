import './App.scss';

import React, { useState, useEffect, useReducer } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';
import axios from 'axios';

export const initialState = {
  data: null,
  // requestParams: {},
  loading: false,
  history: [], // added for lab 29
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
        data: action.payload, //data was here but form doesnt send info back
      };
    case 'FINISH':
      return {
        ...state,
        loading: false,
        history: [...state.history], //copilot added this 
      }
      case 'HISTORY':
        return {
          ...state,
          ...state.history[action.payload],
        }
    default:
      return state;
  }
};


const App = () => { 

  const [state, dispatch] = useReducer(requestReducer, initialState)
  
  
  const [requestParams, setRequestParams] = useState({});
  useEffect(() => {
    async function getData() {
      console.log('reqParams has changed!');
      let response = await axios.get(requestParams.url);
      let action = {
        type: 'FINISH',
        payload: response.data,
        setRequestParams: requestParams
      }
      dispatch(action);
      
    }
    getData();
  }, [requestParams]);


  const callApi = (requestParams) => {
    let action = {
      type: 'START',
      payload: requestParams
    }
    dispatch(action);
  }

  return (
    <>
      <Header />
      <div data-testid='test-method' className='CRUD'>Request Method: {requestParams.method}</div>
      <div data-testid='test-url' className='URL'>URL:{requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History history={state.history} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );

}

export default App;
