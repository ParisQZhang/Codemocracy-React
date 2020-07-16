const mongoose = require('./index');

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  published_at: { type: String, default: new Date().toISOString() },
  score: { type: Number, default: 0 },
});

const topics = mongoose.model('topics', topicSchema, 'reactTopics');
module.exports = topics;
