const router = require("express").Router();
const cloudinary = require("../util/cloudinary");
const upload = require("../util/videomulter");
const Video = require("../models/video");

router.post("/video", upload.single("video"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path,{resource_type: "video"});

    let video = new Video({
      desc:req.body.desc,
      URL: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await video.save();
    res.json(video);
  } catch (err) {
    console.log(err);
  }
});

router.get("/viewvideo", async (req, res) => {
  
    let video = await Video.distinct("URL")
    .then(result=>{
      res.status(200).json({
         data:result
         
      })
      console.log(result)
     
}).catch(err=>{
  res.status(200).json({
      error:err
  })
})

})
  




module.exports = router;