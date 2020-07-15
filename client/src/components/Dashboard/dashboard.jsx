import React, { useState } from 'react';
import { useEffect } from 'react';
import TopicList from '../TopicList/topicList';
import Post from '../Post/post';
function Dashboard() {
  const [topics, setTopics] = useState({});
  const [topicIds, setTopicIds] = useState([]);
  const allTopicUrl = 'http://localhost:3053/topics';

  const loadData = async () => {
    const res = await fetch(allTopicUrl);
    res.json().then((data) => {
      try {
        const newEntities = data.reduce((acc, topic) => {
          return {
            ...acc,
            [topic._id]: Object.assign(topic, { inList: true }),
          };
        }, {});
        setTopics(newEntities);
        setTopicIds(Object.keys(newEntities));
      } catch (err) {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(topicIds);
  }, [topicIds]);

  const voteUp = (topic) => {
    const newEntities = { ...topics };
    newEntities[topic._id].score++;
    setTopics(newEntities);
  };

  const voteDown = (topic) => {
    const newEntities = { ...topics };
    newEntities[topic._id].score--;
    setTopics(newEntities);
  };

  const deleteTopic = (topic) => {
    const newEntities = { ...topics };
    newEntities[topic._id].inList = false;
    setTopics(newEntities);
  };

  const addTopic = (title) => {
    console.log('add topic');
    const newEntities = { ...topics };
    const newTopic = {
      _id: 'sdk92k20elked202doe5doge',
      title: title,
      published_at: new Date().toISOString(),
      score: 0,
      inList: true,
    };
    newEntities[newTopic._id] = newTopic;
    setTopics(newEntities);
    setTopicIds([...topicIds, newTopic._id]);
  };

  return (
    <div className="dashboard" key={topicIds}>
      {console.log('rendering', topicIds)}
      <Post addTopic={addTopic}></Post>
      <TopicList
        topics={topicIds
          .map((id) => topics[id])
          .filter((topic) => topic.inList === true)
          .sort((a, b) => b.score - a.score)}
        voteUp={voteUp}
        voteDown={voteDown}
        deleteTopic={deleteTopic}
      ></TopicList>
    </div>
  );
}

export default Dashboard;
