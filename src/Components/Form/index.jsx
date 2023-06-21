import React from 'react';
import { useState } from 'react';
import './Form.scss';


function Form(props){
  
const [url, setUrl] = useState('');
const [method, setMethod] = useState('GET');
const [json, setJson] = useState('');

const handleClick = (e) => { 
  setMethod(e.target.id);
}

  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(event) => setUrl(event.target.value)}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={handleClick} style={{ backgroundColor : method === 'get' ? 'green' : 'grey'}}>GET</span>
            <span id="post" onClick={handleClick} style={{ backgroundColor : method === 'post' ? 'orange' : 'grey'}}>POST</span>
            <span id="put" onClick={handleClick} style={{ backgroundColor : method === 'put' ? 'teal' : 'grey'}}>PUT</span>
            <span id="delete" onClick={handleClick} style={{ backgroundColor : method === 'delete' ? 'red' : 'grey'}}>DELETE</span>
          </label>
          {method === 'post' && <textarea onChange={(event) => setJson(event.target.value)}/>}
          {method === 'put' && <textarea onChange={(event) => setJson(event.target.value)}/>}
        </form>
      </>
    );
  
}

export default Form;
