const mongoose = require('mongoose');
const subjectsschema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    hours:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('subjects',subjectsschema);