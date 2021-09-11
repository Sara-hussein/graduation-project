const mongoose = require("mongoose");
const promise=require('promise')

const { promiseImpl } = require("ejs");
const bcrypt =require('bcrypt');
const { resolve, reject } = require("promise");
const db_url = "mongodb://localhost:27017/College-System";

const userschema = mongoose.Schema({
    username:
    {   type:String,
        required:true},

    email:
    { type:String,
       required:true},

    password:
    {   
       type:String,
        required:true},
 
});
//////////collection name///////////////////////////////
const User = mongoose.model("user",userschema);
/////////////////////signup fn////////////////////////
exports.createNewUser = (username,email,password) => {
   return new Promise((resolve,reject) => {
       mongoose.connect(db_url).then(() => {
           ///check if email exists or not//////////////
           return User.findOne({email: email}) 
       }).then(user => {
           if(user) 
           
           {   mongoose.disconnect()
            reject('email is used')}
           
       }).then(() =>{
        let user = new User({
               username: username,
               email :email,
               password:password,
           })
             return user.save()
           
       }).then(()=>{
           mongoose.disconnect()
           resolve('student created successfully')
       }).catch(err =>{
        mongoose.disconnect()
        reject(err)})
   });
      
};

exports.getallusers =()=>{

    return new Promise((resolve,reject)=>{
     mongoose.connect(db_url).then(()=>{
        return User.find({})}).then(users =>{
            mongoose.disconnect() 
            resolve(users)
         }).catch(err =>reject(err))
     
    })
  }
  exports.delete = function(req, res) {

   
    User.remove({_id: req.params.id}, function(err) {

        if(err) {
            console.log("Delete USER Error", err);
        }
        else {
            console.log("USER deleted!");
            res.redirect("list.ejs");
        }

    });
};