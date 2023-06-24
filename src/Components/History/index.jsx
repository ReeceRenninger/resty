// import React from 'react';

// const History = (props) => {
//   // const handleHistoryItemClick = (event) => {
//   //   // Call the callback function passed from the parent component (App.js)
//   //   props.handleHistoryClick(event);
//   // };
//   const handleHistoryItemClick = (event) => {
//     props.handleHistoryClick(event[0].results);
//   };

//   return (
//     <>
//       <ul>
//         {props.history.map((event, index) => (
//           <li key={index} onClick={() => (event[0].results)}>
//             {event[0].url}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// // // export default History;
const History = (props) => {
  console.log(props.history);
  return (
    <>
      <ul>
        {props.history.map((event, index) => (
          <li key={index}>{event[0].url}</li>
          ))}
      </ul>
    </>
  );
};


export default History;