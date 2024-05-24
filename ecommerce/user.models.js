import { timeStamp } from "console"
import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  pasword:{
    type:String,
    required:true
  }
},{timeStamp:true})

export const User=mongoose.model("User",userSchema)
