const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');

router.get('/topics', controller.getTopics);
router.post('/topics', controller.newTopic);
router.delete('/topics/:id', controller.deleteTopicWithId);
router.put('/topics/:id/up', controller.voteUp);
router.put('/topics/:id/down', controller.voteDown);

module.exports = router;
