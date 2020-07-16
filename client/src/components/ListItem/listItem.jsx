import React from 'react';
import './listItem.css';

function ListItem({ topic, voteDown, voteUp, deleteTopic }) {
  return (
    <div className="list-item">
      <h1>{topic.title}</h1>
      <h2>{topic.published_at}</h2>
      <button className="up" onClick={() => voteUp(topic._id)}></button>
      <div className="left">
        <button className="down" onClick={() => voteDown(topic._id)}></button>
        <p>{topic.score}</p>
        <button
          className="delete"
          onClick={() => deleteTopic(topic._id)}
        ></button>
      </div>
    </div>
  );
}

export default ListItem;
