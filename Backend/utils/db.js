const dontenv=require("dotenv");
const mongoose=require("mongoose");
dontenv.config();
//DB
const DB=process.env.DB;
const dbConnection=async()=>{
    try{
        await mongoose.connect(DB).then(()=>{
            console.log("Database connect successfully");
        })
    }catch (err){
       console.log(err);
       setTimeout(dbConnection,5000)
    }
}
module.exports=dbConnection;