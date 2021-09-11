const mongoose=require('mongoose')

const db_url ="mongodb://localhost:27017/College-System"
const connecttodb = async()=>{
    mongoose.connect(db_url,{
        useNewUrlParser:true,
        useUnifiedTopology: true 
    })
    console.log('mongodbconnected')
}

module.exports = connecttodb;