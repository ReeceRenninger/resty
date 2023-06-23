const History = (props) => {
  return (
    <>
      <ul>
        {props.history.map((event, index) => (
          <li key={index}>{event.url}</li>
        ))}
      </ul>
    </>
  )
}

export default History;