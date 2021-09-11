let addtutoriallink= require('../models/PV-AddLink');
module.exports = {


    addtutoriallink : async (req, res) => {
        tutoriallink=req.body.tutoriallink,
        tutoriallink2=req.body.tutoriallink2
const addtutorial = new addtutoriallink(
    // tutoriallink=req.body.tutoriallink,
    // tutoriallink2=req.body.tutoriallink2
);
addtutorial.tutoriallink=tutoriallink;
addtutorial.tutoriallink2=tutoriallink2;
await addtutorial.save().then 
(result=>{
    console.log(result)
    res.status(200).json({
       data:result
    })
}).catch(err=>{
    console.log(err)
        res.status(500).json({
            error:err
            
        }) 
    })

},
    viewtutorials : async (req, res) => {
        addtutoriallink.distinct("tutoriallink")

       .then(result=>{
           res.status(200).json({
              Tutorials:result
           })
           console.log(result)

       }).catch(err=>{
           res.status(200).json({
               error:err
           })
       })
    },
    viewtutorials2 : async (req, res) => {
        addtutoriallink.distinct("tutoriallink2")

       .then(result=>{
           res.status(200).json({
              Tutorials2:result
           })
           console.log(result)

       }).catch(err=>{
           res.status(200).json({
               error:err
           })
       })
    }



};