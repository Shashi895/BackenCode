import mongoose  from "mongoose";
const todoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,

  }
  ,
  complete:{
    type:Boolean,
    default:false,
    cretedby:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Subtodo"
    },
    subtodo:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"todo"

      }
    ]
  }


})

export const Todo =mongoose.model("Todo",todoSchema)