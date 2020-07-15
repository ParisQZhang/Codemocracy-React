import React, { useState } from 'react';
import { useEffect } from 'react';
import TopicList from '../TopicList/topicList';

function Dashboard() {
  const [topics, setTopics] = useState({});
  const [topicIds, setTopicIds] = useState([]);
  const allTopicUrl =
    'https://private-anon-19bf69d8d6-codemocracy.apiary-mock.com/topics';

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

  return (
    <div className="dashboard" key={topicIds}>
      {console.log('rendering', topics)}
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
