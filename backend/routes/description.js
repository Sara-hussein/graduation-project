const router = require("express").Router();
const Desc = require("../models/description");

router.post("/desc", async (req, res) => {
  try {
   
    let desc = new Desc({
   desc:req.body.desc,
   URL:req.body.URL
    });
    
    await desc.save();
    res.json(desc);
  } catch (err) {
    console.log(err);
  }
});

router.get("/viewdesc", async (req, res) => {
  
  let desc = await Desc.find({},{_id:false})
  .then(result=>{
    res.status(200).json({
       description:result
       
    })
    console.log(result)
   
}).catch(err=>{
res.status(200).json({
    error:err
})
})

})





module.exports = router;



