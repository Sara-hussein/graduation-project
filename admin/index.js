const express =require('express')
const promise=require('promise')
const app=express()
const  list =require('./routes/list')
const authRouter =require('./routes/authroute')
const session = require('express-session')
const Sessionstore =require('connect-mongodb-session')(session)



app.set('view engine','ejs');
 app.set('views','views');
 app.use('/',list);
  app.use('/',authRouter)
 

app.listen(3000,(err)=>{
    console.log(err)
   console.log('server listen on port 3000')
})


