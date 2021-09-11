const express = require('express');
const router = express.Router();
const addcourselink = require('../controllers/addlink');
router.get('/viewcourse',addcourselink.viewcourses);
router.post('/addcourse',addcourselink.addcourselink);
module.exports = router;