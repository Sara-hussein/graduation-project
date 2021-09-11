let AddNewPost = require('../models/AddPost');


module.exports = {
    AddPost : async (req, res) => {
//console.log(req.body);
   const {content} = req.body;
  // console.log(content);
const AddPosts = new AddNewPost({
   
    content:content
})
await AddPosts.save().then 
(result=>{
    console.log(result)
    res.status(200).json({
       //data:result,
       success:true,
       msg:AddPosts
    })
}).catch(err=>{
    console.log(err)
        res.status(500).json({
            error:err
            
        }) 
    })

},


ViewAllPosts : async (req, res) => {
 
    // var content = await AddNewPost.find().select('content').select("-_id")
    // console.log(content)
    try{
     var content = await AddNewPost.find().populate('comments').select('content').select("_id");
     console.log(content)
        
       // res.send(allsubject);
        res.status(200).json({
            success: true,
            posts:content
           
           // contents: content
        });
      
    } catch (error) {
        console.log(error.message);
    }
 }


};