const mongoose =require('mongoose')

const Schema = mongoose.Schema
const uploadfileSchema = new Schema({
  
      Image: {
        type: String,
      },
      cloudinary_id: {
        type: String,
      },
 } )
 

module.exports=mongoose.model('uploadfile',uploadfileSchema)