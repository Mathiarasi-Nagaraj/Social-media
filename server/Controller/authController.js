const userModel=require('../Models/userModel');
const register=async (req,res,next)=>
{
const newUser=new userModel({
    userName:req.body.userName,
    email:req.body.email,
    password:req.body.password
});
try{
    const user=await newUser.save();
    res.status(200).json("user registered ");
} catch(err)
{
    console.log(err);
}

}
const login=async (req,res,next)=>
{

}


module.exports={register,login};