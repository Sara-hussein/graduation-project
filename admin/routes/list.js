const router =require('express').Router()
const homecontroller = require('../controller/list')
const User=require('../model/authmodel')

router.get('/list',homecontroller.getuser)

router.get("/mongooses/:id/destroy",User.delete)
module.exports = router
  