const express = require('express');
const router = express.Router();
const AddNewPost = require('../controllers/AddPost');
router.post('/AddPost', AddNewPost.AddPost);
router.get('/ViewAllPosts', AddNewPost.ViewAllPosts);
//router.put('/AddComment', AddNewPost.AddComment);


module.exports = router ;