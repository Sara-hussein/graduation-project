const mongoose =require('mongoose')
const Schema = mongoose.Schema
const videoSchema = new Schema({

  desc: {
    type: String,
  },
    URL: {
        type: String,
      },
      cloudinary_id: {
        type: String,
      },
      
 } )
 

module.exports=mongoose.model('videos',videoSchema)