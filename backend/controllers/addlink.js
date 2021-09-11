let addcourselink= require('../models/addlink');
module.exports = {
    addcourselink : async (req, res) => {
const addcourse = new addcourselink({
    courselink:req.body.courselink
})
addcourse.save().then 
(result=>{
    console.log(result)
    res.status(200).json({
       data:result
    })
}).catch(err=>{
    console.log(err)
        res.status(500).json({
            error:err
            
        }) 
    })

},
    viewcourses : async (req, res) => {
       addcourselink.distinct("courselink")

       .then(result=>{
           res.status(200).json({
              course:result
           })
           console.log(result)

       }).catch(err=>{
           res.status(200).json({
               error:err
           })
       })
    }


};