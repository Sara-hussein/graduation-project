const mongoose = require('mongoose');
const pollschema = new mongoose.Schema({
    question: String,
    choice1 : String ,
    choice2 : String ,
    vote1 :{
      type:Number,
      default:0
    },
    vote2 :{
      type:Number,
      default:0
    }
});

 module.exports = mongoose.model('poll',pollschema);

// const mongoose = require('mongoose');
// const optionSchema = new mongoose.Schema({
//     option: String,
//     votes: {
//       type: Number,
//       default: 0,
//     },
//   });
  
//   const pollSchema = new mongoose.Schema({
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//     created: {
//       type: Date,
//       default: Date.now,
//     },
//     question: String,
//     options: [optionSchema],
//     voted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   });
  // module.exports = mongoose.model('Poll', pollSchema);