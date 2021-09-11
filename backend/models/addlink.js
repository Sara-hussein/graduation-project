const mongoose = require('mongoose');
const addcourselinkschema = new mongoose.Schema({
    courselink:{
        type:String,
        required:true
    },
  
});

module.exports = mongoose.model('addcourselink',addcourselinkschema);