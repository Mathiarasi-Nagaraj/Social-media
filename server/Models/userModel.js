const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {
           username:
           {
             type:String,
             require:true,
             min:5,
             max:20,
             unique:true
           },
           email:
           {
            type:String,
            require:true,
            min:5,
            max:20,
            unique:true

           },
           password:
           {
            type:String,
            require:true,
            min:6
           },
           profilePicture:
           {
            type:String,
            default:""
           },
           coverPicture:
           {
            type:String,
            default:""
           },
           followers:
           {
               type:Array,
               default:[]
           },
           followings:
           {
            type:Array,
            default:[] 
           },
           isAdmin:
           {
               type:Boolean,
               default:false
           },
           desc:{
               type:String,
               max:100,
               default:"hey all"
           },
           city:{
               type:String,
               max:50,
               default:"Chennai"
           },
           from:{
            type:String,
            max:50,
            default:"Chennai"
        }
           ,relationship:{
               type:String,
               default:"single"
               
           }


    },{timestamps:true}
)
const userModel=mongoose.model("User",UserSchema);
module.exports=userModel;