const router = require("express").Router();
const cloudinary = require("../util/cloudinary");
const upload = require("../util/multer");
const Image = require("../models/uploadfile");

router.post("/image", upload.single("photo"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new user
    let image = new Image({
      Image: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await image.save();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

router.get("/viewimage", async (req, res) => {
  
    let image = await Image.distinct("Image")
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