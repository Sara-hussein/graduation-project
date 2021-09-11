  
const videomulter = require("multer");
const path = require("path");

// Multer config
module.exports = videomulter({
  storage: videomulter.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".mp4" && ext !== ".wav") {
      console.log("video")
        cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});