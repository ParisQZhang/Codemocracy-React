const topics = require('../model/topic');

exports.getTopics = async (req, res) => {
  try {
    res.send(await topics.find({}));
    res.status(200);
  } catch (err) {
    res.sendStatus = 500;
    if (err) throw err;
  }
};

exports.newTopic = async (req, res) => {
  try {
    const newTopic = {
      title: req.body.title,
      published_at: new Date().toISOString(),
      score: Number(0),
    };
    await topics.create(newTopic);
    res.status(201);
    res.send();
  } catch (err) {
    res.sendStatus(500);
    if (err) throw err;
  }
};

exports.deleteTopicWithId = async (req, res) => {
  try {
    const id = req.params.id;
    await topics.deleteOne({ _id: id }, function (err) {
      if (err) throw err;
    });
    res.status(200);
    res.send();
  } catch (err) {
    res.sendStatus(500);
    if (err) throw err;
  }
};

exports.voteUp = async (req, res) => {
  try {
    const id = req.params.id;
    await topics.updateOne({ _id: id }, { $inc: { score: 1 } });
    res.send(await topics.find({ _id: id }));
    res.status(200);
  } catch (err) {
    res.status(500);
    if (err) throw err;
  }
};

exports.voteDown = async (req, res) => {
  try {
    const id = req.params.id;
    await topics.updateOne({ _id: id }, { $inc: { score: -1 } });
    res.send(await topics.find({ _id: id }));
    res.status(200);
  } catch (err) {
    res.status(500);
    if (err) throw err;
  }
};
