const express = require('express');
const router = express.Router();
const calculateGPA = require('../controllers/calculateGPA');
const subjectcontroller = require('../controllers/subjectcontroller');
//routes of total houres
router.get('/subject/all',subjectcontroller.getAllsubjects);
router.post('/subject/totalhours',subjectcontroller.getTotolHours);

//routes of calculate gpa
router.post('/GPA',calculateGPA.calculateGPA);

module.exports = router;