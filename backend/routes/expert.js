const express = require('express');
const router = express.Router();
const expert = require('../controllers/expert');

//routes of total houres
// router.get('/expert',expert.getAllquestions);
router.post('/answer',expert.getAllAnswers);

module.exports = router;