const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const Schema = mongoose.Schema;
const commentschema = new mongoose.Schema({
    content:{
        type: String ,
        required : true,
        posted: {
            type : Schema.Types.ObjectId,
            ref : "AddNewPost"
        }
    }
});

module.exports = mongoose.model('comment',commentschema);