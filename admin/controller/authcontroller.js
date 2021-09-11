const registermodel = require('../model/authmodel');


exports.getsignup = (req,res,next)=>{
     res.render('signup')
 };



exports.postsignup = (req,res,next)=>{
  registermodel.createNewUser(req.body.username, req.body.email, req.body.password)
  .then(()=>
      res.redirect('/list')).catch(err =>{
        console.log(err);
      });    
};



