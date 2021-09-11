const express= require('express')
const morgan =require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const connecttodb =require('./config/db')
const app =express()
dotenv.config();

app.use(morgan('dev'));
app.use(cors())
app.use(express.json({}));
app.use(express.json({
    extended:true
}))
dotenv.config({
    path: './config/config.env'
  });
  
connecttodb();
app.use('/',require('./routes/user'));
app.use('/',require('./routes/CalculateGpa&total houres'));
app.use('/',require('./routes/addlink'));
app.use('/',require('./routes/PV-AddLink'));
app.use('/',require('./routes/uploadpdf'));
app.use('/',require('./routes/expert'));
app.use('/',require('./routes/description'));
app.use('/',require('./routes/poll'));
app.use('/',require('./routes/AddPost'));
app.use('/',require('./routes/comment'));


//app.use('/',require('./routes/poll'));
app.use('/',require('./routes/video'));

const port = process.env.port ||3000;
app.listen
(port,console.log('server running on port:3000'))