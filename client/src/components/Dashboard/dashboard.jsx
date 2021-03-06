import React, { useState } from 'react';
import { useEffect } from 'react';
import TopicList from '../TopicList/topicList';
import Post from '../Post/post';
import ApiService from '../../ApiService';

function Dashboard() {
  const [topics, setTopics] = useState([]);

  const loadData = async () => {
    ApiService.getTopics().then((topics) => {
      setTopics(topics);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const voteUp = (id) => {
    ApiService.voteUpTopic(id).then((updatedTopic) => {
      setTopics((newTopics) => {
        const target = newTopics.find(
          (topic) => topic._id === updatedTopic._id
        );
        target.score = updatedTopic.score;
        return [...newTopics];
      });
    });
  };

  const voteDown = (id) => {
    ApiService.voteDownTopic(id).then((updatedTopic) => {
      setTopics((newTopics) => {
        const target = newTopics.find(
          (topic) => topic._id === updatedTopic._id
        );
        target.score = updatedTopic.score;
        return [...newTopics];
      });
    });
  };

  const deleteTopic = (id) => {
    ApiService.deleteTopic(id).then(() => {
      setTopics((topicList) => {
        const newList = topicList.filter((topic) => topic._id !== id);
        return [...newList];
      });
    });
  };

  const addTopic = (title) => {
    ApiService.postTopic(title).then((topic) => {
      setTopics((topics) => [...topics, topic]);
    });
  };

  return (
    <div className="dashboard">
      <Post addTopic={addTopic}></Post>
      <TopicList
        topics={topics.sort((a, b) => b.score - a.score)}
        voteUp={voteUp}
        voteDown={voteDown}
        deleteTopic={deleteTopic}
      ></TopicList>
    </div>
  );
}

export default Dashboard;
