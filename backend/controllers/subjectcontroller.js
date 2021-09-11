const { Cursor } = require('mongodb');
const subject = require('../models/subject');
var str = "";


// get a list of all subjects
module.exports = {
    getAllsubjects : async (req , res) => {
        try{
            
            var allsubject = await subject.find().select('name').select("-_id");
            console.log(allsubject);
            
           // res.send(allsubject);
            res.status(200).json({
                success: true,
               
               
                subjects: allsubject
            });
            console.log(allsubject);
        } catch (error) {
            console.log(error.message);
        }
    },
    getTotolHours:async (req,res,next) =>{
        // list of id  of subjects
        const allsubject=req.body;
        let total =0;
        try{
            for (var i = 0; i < allsubject.length; i++) {
            
                let sub = await subject.findOne({name:allsubject[i]});
                if(sub !=null){
                    total += sub.hours;
                }
            }
           

            res.status(200).json({
                success: true,
               
               
                total: total
            });
        } catch (error) {

                res.status(500).json({
                success: false,
                msg: 'Server Error'
            })
        }
    }



};

