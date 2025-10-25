const mongoose=require("mongoose");
// import { type } from './../node_modules/@types/whatwg-url/index.d';
const ProspectSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    address:{type:String},
    tel:{type:String},
    bloodgroup:{type:String},
    weight:{type:Number},
    date:{type:String},
    diseases:{type:String},
    age:{type:Number},
    bloodpressure:{type:Number},
    status:{type:Number,default:0},
})
module.exports=mongoose.model("Prospect",ProspectSchema);