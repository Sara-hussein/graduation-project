const mongoose = require('mongoose');
const addtutoriallinkschema = new mongoose.Schema({
    tutoriallink:{
        type:String,
        //required:true
    },
    tutoriallink2:{
        type:String,
        //required:true
    }
  
});

module.exports = mongoose.model('addtutoriallink',addtutoriallinkschema);