let Comment = require('../models/comment');
let AddNewPost = require('../models/AddPost');


module.exports= {
    comment : (req,res)=>{
        const comment= new Comment({
            content: req.body.content,
        });
         comment.save();
        AddNewPost.findByIdAndUpdate(req.body.postId,{
            $push: {
                comments: {
                  _id: comment._id,
                  content: comment.content
                }
        },
            new:true,
            useFindAndModfiy:false
        })
        .populate("comments","content -_id")
       // .populate("comment","content -_id")
        //.populate("postedBy","_id name")
        .exec((err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }else{
                res.json(result)
            }
        })
    },
    getcomments :async (req,res)=>{

        const {postId} = req.body;
        
        try{
            var content = await AddNewPost.findById(postId)
                                .select("-content").select('-_id') .populate('comments');
            console.log(content)
               
              // res.send(allsubject);
               res.status(200).json(
                content,
                  // contents: content
               );
             
           } catch (error) {
               console.log(error.message);
           }
    }


};