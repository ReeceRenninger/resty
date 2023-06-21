import React from 'react';
import './Results.scss';

function Results(props) {
  //TODO: add some type of new html element for loading message
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
  
}

export default Results;
