import React from 'react';
import ListItem from '../ListItem/listItem';

function topicList(props) {
  return (
    <div className="topic-list">
      {console.log(props)}
      {props.topics.map((topic) => {
        return (
          <ListItem
            key={topic._id}
            topics={props.topics}
            topic={topic}
            voteUp={props.voteUp}
            voteDown={props.voteDown}
            deleteTopic={props.deleteTopic}
          ></ListItem>
        );
      })}
    </div>
  );
}

export default topicList;
