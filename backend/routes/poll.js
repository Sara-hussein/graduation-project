const express = require('express');
const router = express.Router();
const NewPoll = require('../controllers/poll');

   router.get('/ShowVotes',NewPoll.ShowVotes)
 router.post('/VoteNumber1',NewPoll.VoteNumber1);
 router.post('/VoteNumber2',NewPoll.VoteNumber2);
 //router.get('/viewChoice1',NewPoll.viewChoice1);
router.post('/AddPoll',NewPoll.AddPoll);


module.exports = router;