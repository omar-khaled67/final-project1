const mongoose=require("mongoose");
// import { Timestamp } from './../node_modules/bson/src/timestamp';
const UserSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    status:{type:Number,default:0},
    role:{type:String,default:"admin"},
},{
    Timestamp:true
})
module.exports=mongoose.model("User",UserSchema);