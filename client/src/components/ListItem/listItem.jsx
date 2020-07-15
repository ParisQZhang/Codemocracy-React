import React from 'react';
import './listItem.css';

function ListItem(props) {
  return (
    <div className="list-item">
      {console.log('in item', { props })}
      <h1>{props.topic.title}</h1>
      <h2>{props.topic.published_at}</h2>
      <p>{props.topic.score}</p>
      <button onClick={() => props.voteUp(props.topic)}>🔼</button>
      <button onClick={() => props.voteDown(props.topic)}>🔽</button>
      <button onClick={() => props.deleteTopic(props.topic)}>❌</button>
    </div>
  );
}

export default ListItem;
