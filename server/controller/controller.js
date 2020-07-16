const topics = require('../model/topic');

exports.getTopics = async (req, res) => {
  try {
    console.log('inside GET');
    res.send(await topics.find({})); //===res.JSON() res.send does stringify by default too
    res.status(200);
  } catch (err) {
    res.sendStatus = 500;
    if (err) throw err;
  }
};

exports.newTopic = async (req, res) => {
  try {
    console.log('inside POST');
    await topics.create({ title: req.body.title });
    res.status(201);
    res.send(await topics.findOne({ title: req.body.title }));
  } catch (err) {
    res.sendStatus(500);
    if (err) throw err;
  }
};

exports.deleteTopicWithId = async (req, res) => {
  try {
    console.log('inside DELETE');
    const id = req.params.id;
    await topics.deleteOne({ _id: id }, function (err) {
      if (err) throw err;
    });
    res.status(204);
    res.send();
  } catch (err) {
    res.sendStatus(500);
    if (err) throw err;
  }
};

exports.voteUp = async (req, res) => {
  try {
    console.log('inside PUT UP');
    const id = req.params.id;
    res.send(
      await topics.findByIdAndUpdate(
        { _id: id },
        { $inc: { score: 1 } },
        { new: true }
      )
    );
    res.status(200);
  } catch (err) {
    res.status(500);
    if (err) throw err;
  }
};

exports.voteDown = async (req, res) => {
  try {
    console.log('inside PUT DOWN');
    const id = req.params.id;
    res.send(
      await topics.findByIdAndUpdate(
        { _id: id },
        { $inc: { score: -1 } },
        { new: true }
      )
    );
    res.status(200);
  } catch (err) {
    res.status(500);
    if (err) throw err;
  }
};
