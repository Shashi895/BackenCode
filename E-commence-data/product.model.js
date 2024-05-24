import mongoose from "mongoose";

const productmodel=new mongoose.Schema(
  {
    description:{
      type:String,
      required:true,
      
    },
    name:{
      type:String,
      required:true,

    }, 
    productImage:{
      type:String,

    },
    price:{
      type:Number,
      default:0
    },
    stock:{
      type:Number,
      default:0
    }

  }
)

export const Product=mongoose.model("Product",productmodel)