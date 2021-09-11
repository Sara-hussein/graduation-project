const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const user_jwt = require('../controllers/user_jwt');
const jwt = require('jsonwebtoken');
const Subject = require('../models/subject');

router.post('/editProfile',  async(req, res, next)=>{
   
        EditUsername= req.body.EditUsername; 
        EditEmail= req.body.EditEmail ;
        EditPassword = req.body.EditPassword;
        const salt = await bcryptjs.genSalt(10);
        password2 =await bcryptjs.hash(EditPassword, salt)   
  //      try {
            //const email= req.body.email;
         User.findOneAndUpdate({email:req.body.email},{  
               username: EditUsername, 
                email:EditEmail,
               password : password2
                },{new:true},(error,data)=>{
                    if(error){
                  console.log(error)      
                    }else{
                        console.log(data)
               
    // })
                    }
                
             })
    //}
    // .then(result=>{
    //     res.status(200).json({
    //         Updated_Profile:result
    //     })
    // })
    //  .catch(err=> {
    //     console.log(err);  
    //     res.status(500).json({
    //         error:err
    //     })
    // });

})


router.get('/register', user_jwt, async(req, res, next) => {
    try {

        const user = await User.findById(req.user.id).select('-password');
            res.status(200).json({
                success: true,
                user: user
            });
    } catch(error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            msg: 'Server Error'
        })
        next();
    }
});

router.post('/register', async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        
        let user_exist = await User.findOne({ email: email });

        if(user_exist) {
            return res.status(400).json({
                success: false,
                msg: 'User already exists'
            });
        }
        
        let user = new User();

        user.username = username;
        user.email = email;

        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }


        jwt.sign(payload, process.env.jwtUserSecret, {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            
            res.status(200).json({
                success: true,
                token: token
            });
        });



    } catch(err) {
        console.log(err);
    }
});




router.post('/login', async(req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {

        let user = await User.findOne({
            email: email
        });

        if(!user) {
            return res.status(400).json({
                success: false,
                msg: 'User not exists go & register to continue.'
            });
        }


        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({
                success: false,
                msg: 'Invalid password'
            });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, process.env.jwtUserSecret,
            {
                expiresIn: 360000
            }, (err, token) => {
                if(err) throw err;

                res.status(200).json({
                    success: true,
                    msg: 'User logged in',
                    token: token,
                    user: user
                });
            }
        )

    } catch(error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            msg: 'Server Error'
        })
    }
});
/*
router.get('/subject/all', async(req, res, next) => {
    const subjects = await Subject.find(); 
    console.log(subjects);
    res.json(subjects);
});
router.post('/subject/totalhours', async(req, res, next) => {
    //["IS","DB"]
    const allsubject=req.body;
    console.log(req.body);
    let total =0;
  
    
    for (var i = 0; i < allsubject.length; i++) {
        
        let subject = await Subject.findOne({name:allsubject[i]});
        if(subject !=null){
            total += subject.hours;
        }
    }
    
    res.json(total);
});
*/


module.exports = router;