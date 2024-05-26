// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import express  from "express";
const app=express();
import connectDB from "./db/indexi.js";

dotenv.config({
  path:'./env'
})
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port :${process.env.PORT}`);
  })
})
.catch((error)=>{
  console.log(" monogo connection failed Error",error);

})






























/*
;(async ()=>{
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("Error",error);
    throw error;
   })
   app.listen(process.env.PORT,()=>{
    console.log(`App is listng on port${process.env.PORT}`);
   })
    
  } catch (error) {
    console.log("ERROr",error);
    throw error
    
  }
})()
*/
