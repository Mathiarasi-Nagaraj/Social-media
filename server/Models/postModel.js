const mongoose=require('mongoose');
const PostSchema=new mongoose.Schema(
    {
           username:
           {
             type:String,
             require:true,
             min:5,
             max:20,
             unique:true
           },
          img: {
                 type:String,
                 default:""
          },
           likes:
           {
               type:Array,
               default:[]
           },
           dislikes:
           {
            type:Array,
            default:[] 
           },
         
           desc:{
               type:String,
               max:100
           },
          


    },{timestamps:true}
)
const postModel=mongoose.model("posts",PostSchema);
module.exports=postModel;