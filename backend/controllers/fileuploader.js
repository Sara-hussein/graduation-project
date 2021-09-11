'use strict';
const singlefile =require('../models/uploadfile')

router.post('/upload', upload.single('photo'), (req, res, next) => {
    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config();
      }
      
      const aws = require('aws-sdk')
      const multer = require('multer')
      const multerS3 = require('multer-s3')
      
      const s3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: "us-east-1",
      });
      
    const upload = multer({
        storage: multerS3({
          s3,
          bucket: process.env.AWS_BUCKET,
          acl: 'public-read',
          metadata(req, file, cb) {
            cb(null, {fieldName: file.fieldname});
          },
          key(req, file, cb) {
            cb(null, Date.now().toString() + '.png');
          }
        })
        
      })
      
     
    });
module.exports = router;