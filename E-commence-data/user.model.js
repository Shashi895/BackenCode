import mongoose, { Types }  from "mongoose";
import express, { request } from "express"

const userModel=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,


  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true,
    unique:true
  },
  

})


export const User=mongoose.model("User",userModel)