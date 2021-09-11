const express = require('express');
const router = express.Router();
const addtutoriallink = require('../controllers/PV-AddLink');
router.get('/viewtutorials',addtutoriallink.viewtutorials);
router.get('/viewtutorials2',addtutoriallink.viewtutorials2);
router.post('/addtutoriallink',addtutoriallink.addtutoriallink);

module.exports = router;