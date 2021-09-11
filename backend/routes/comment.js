const express = require('express');
const router = express.Router();
const AddNewPost = require('../controllers/AddPost');
const comment = require('../controllers/comment');

router.post('/comment/add', comment.comment);
router.post('/comment/post', comment.getcomments);



module.exports = router ;