const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const Schema = mongoose.Schema;
const AddNewPostschema = new mongoose.Schema({
  
    content:{
        type:String,
        required:true
    },
    comments:[{
        type: Schema.Types.ObjectId ,
        ref : "comment"
    }]


});

module.exports = mongoose.model('AddNewPost',AddNewPostschema);