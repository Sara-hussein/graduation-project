const productsmodel = require('../model/authmodel')

exports.getuser =(req,res,next)=>{
    let id = req.params.id;
   productsmodel.getallusers(id).then((users) =>{

    res.render('list'
    ,{
           users:users
       })
   })
}

