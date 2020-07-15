const mongoose = require('./index');

const topicSchema = new mongoose.Schema({
  title: String,
  published_at: String,
  score: Number,
});

const topics = mongoose.model('topics', topicSchema, 'reactTopics');
module.exports = topics;
