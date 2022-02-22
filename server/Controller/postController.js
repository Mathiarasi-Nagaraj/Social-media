const POST=require('../Models/postModel');
const USER=require('../Models/userModel');
const post=async (req,res,next)=>
{  const newPost=new POST(req.body);
    try{
         
          const savedpost=await newPost.save();
          res.status(200).json(savedpost);
    }catch(err){
            console.log(err)
    }
}
const get=async (req,res,next)=>
{
    try{
           const posts= await POST.find({userId:req.params.id})
           
            res.status(200).json(posts);
    }catch(err)
    {
        console.log(err);
    }
}
const gettimeline=async (req,res,next)=>
{

    try{
           const curr= await USER.findById(req.params.id);
           console.log(curr)
           const userpost=await POST.find({userId:curr._id});
           const friendpost= await Promise.all(
               curr.followers.map((friendid)=>
               {
              console.log(friendid)
                POST.find({userId:friendid});
               }
           ))
           console.log(friendpost)
            res.status(200).json(userpost);
    }catch(err)
    {
        console.log(err);
    }
}
const getuserpost=async (req,res,next)=>
{

    try{
           const curr= await USER.findOne({username:req.params.username});
           console.log(curr)
           const userpost=await POST.find({userId:curr._id});
           console.log(userpost)
            res.status(200).json(userpost);
    }catch(err)
    {
        console.log(err);
    }
}
const update=async (req,res,next)=>
{
    try{
          const currpost=POST.findById(req.params.id)
          console.log(req.params.id);
          console.log(req.body.userId);
          if(req.params.id===req.body.userId)
          {
                  await  currpost.updateOne({$set:req.body});
                  res.status(200).json("updated ")
          }
          else{
              res.status(404).json("you cannot update others post");
          }
    }catch(err){
            console.log(err)
    }
}
const deleteone=async (req,res,next)=>
{
    try{
          const currpost=POST.findById(req.params.id)
          if(currpost.userId===req.body.userId)
          {
                  await  currpost.deleteOne();
                  res.status(200).json("deleted ")
          }
          else{
              res.status(404).json("you cannot delete others post");
          }
    }catch(err){
            console.log(err)
    }
}
const like=async (req,res,next)=>
{
    try{
          const currpost=POST.findById(req.params.id)
          if(currpost.userId!=req.body.userId)
          {
                  if(!currpost.allowDiskUse.includes(req.body.userid))
                  {
                      await currpost.updateOne({$push:{likes:req.body.userId}})
                      res.status(200).json("liked post");
                    }
                    else{
                        await currpost.updateOne({$pull:{likes:req.body.userId}})
                        res.status(200).json("disliked post");
                    }
          }
          else{
              res.status(404).json("you cannot like you post");
          }
    }catch(err){
            console.log(err)
    }
}

module.exports={post,deleteone,update,like,get,gettimeline,getuserpost}