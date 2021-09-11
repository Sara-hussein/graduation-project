let NewPoll= require('../models/poll');
//var assert = require('assert');
module.exports = {
AddPoll:async (req, res) => {
   
    const { question, choice1,choice2 } = req.body;
       const poll = new NewPoll({
        question,
         choice1,
         choice2,
      
      });
      await poll.save().then
  
      (result=>{
          console.log(result)
          res.status(200).json({
          })
      }).catch(err=>{
          console.log(err)
              res.status(500).json({
                  error:err
                  
              }) 
          })
        },
        VoteNumber1:async (req, res) => {
            let total =1;
            //const vot=req.body
           // var i=0;

            let poll = await NewPoll.findOne({choice1:req.body.vot});
                total += poll.vote1;
            NewPoll.findOneAndUpdate({choice1:req.body.vot},{  
                vote1:total 
                 },{new:true},(error,data)=>{
                    if(error){
                  console.log(error)      
                    }else{
                     
                          console.log(data)
                    }    
                 
             })
            },
            VoteNumber2:async (req, res) => {
                let total =1;
                
                let poll = await NewPoll.findOne({choice2:req.body.vot2});
                    total += poll.vote2;
                NewPoll.findOneAndUpdate({choice2:req.body.vot2},{  
                    vote2:total 
                     },{new:true},(error,data)=>{
                        if(error){
                      console.log(error)      
                        }else{
                            console.log(data)
                        }     
                 })
                },
ShowVotes:async (req , res) => {
    NewPoll.find()
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
   
 },
 

}

