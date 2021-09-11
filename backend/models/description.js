const mongoose =require('mongoose')
const Schema = mongoose.Schema
const descriptionSchema = new Schema({

  desc: {
    type: String,
  },
  URL: {
    type: String,
  },
      
 } )
 

module.exports=mongoose.model('descriptions',descriptionSchema)