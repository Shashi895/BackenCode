import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    createdby:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"

    }

  },

})

export const Category=mongoose.model("Category",categorySchema)