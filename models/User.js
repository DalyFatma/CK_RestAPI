const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
 name:{type:String,uppercase:true,required:true},
 age:Number
});

const User= mongoose.model("User",userSchema)
module.exports=User