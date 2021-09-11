const router = require('express').Router()
const bodyparser = require('body-parser')
const authcontroller= require('../controller/authcontroller')
const users= require('../controller/list')
 
router.get('/signup',authcontroller.getsignup)

router.post(

    "/signup",bodyparser.urlencoded({extended:true}),
    authcontroller.postsignup);


module.exports = router
