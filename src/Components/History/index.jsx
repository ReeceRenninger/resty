import React from 'react';

const History = (props) => {
  const handleHistoryItemClick = (event) => {
    // Call the callback function passed from the parent component (App.js)
    props.handleHistoryClick(event);
  };

  return (
    <>
      <ul>
        {props.history.map((event, index) => (
          <li key={index} onClick={() => handleHistoryItemClick(event)}>
            {event.url}
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;