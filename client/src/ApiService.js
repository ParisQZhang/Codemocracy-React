function getTopics() {
  return fetchRequest('topics');
}

function postTopic(content) {
  return fetchRequest('topics', {
    method: 'POST',
    body: JSON.stringify({ title: content }),
    headers: { 'Content-Type': 'application/json' },
  });
}

function voteUpTopic(id) {
  return fetchRequest(`topics/${id}/up`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });
}

function voteDownTopic(id) {
  return fetchRequest(`topics/${id}/down`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });
}

function deleteTopic(id) {
  return fetchRequest(`topics/${id}`, { method: 'DELETE' });
}

const fetchRequest = async (path, option) => {
  const url = 'http://localhost:3053';
  return fetch(`${url}/${path}`, option)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.log('err:', err));
};

module.exports = {
  getTopics,
  postTopic,
  voteUpTopic,
  voteDownTopic,
  deleteTopic,
};
