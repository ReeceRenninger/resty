const History = (props) => {
  const { history, displayHistory } = props;
// record.method and url are not defined for some reason, might be how I am passing data down to component
  return (
    <>
      <ul>
        {
          history.length ?
            history.map((record, index) => (
              <li key={`history-${index}`}>
                <button onClick={() => displayHistory(index)}>
                  {record.method}: {record.url}
                </button>
              </li>
            ))
            : ''
        }
      </ul>
    </>
  );
};


export default History;