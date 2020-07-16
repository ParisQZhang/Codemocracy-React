import React from 'react';
import ListItem from '../ListItem/listItem';
import './topicList.css';
function topicList({ topics, voteUp, voteDown, deleteTopic }) {
  return (
    <div className="topic-list">
      {topics.map((topic) => {
        return (
          <ListItem
            key={topic._id}
            topic={topic}
            voteUp={voteUp}
            voteDown={voteDown}
            deleteTopic={deleteTopic}
          ></ListItem>
        );
      })}
    </div>
  );
}

export default topicList;
