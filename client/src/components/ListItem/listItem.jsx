import React from 'react';
import './listItem.css';

function ListItem(props) {
  return (
    <div className="list-item">
      {console.log('in item', { props })}
      <h1>{props.topic.title}</h1>
      <h2>{props.topic.published_at}</h2>
      <button className="up" onClick={() => props.voteUp(props.topic)}></button>
      <div className="left">
        <button
          className="down"
          onClick={() => props.voteDown(props.topic)}
        ></button>
        <p>{props.topic.score}</p>
        <button
          className="delete"
          onClick={() => props.deleteTopic(props.topic)}
        ></button>
      </div>
    </div>
  );
}

export default ListItem;
