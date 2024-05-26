// new version code way 

const asynchandler=(requesthandler)=>{
  (req,res,next)=>{
    Promise.resolve(requesthandler(req,res,next)).catch((err)=>next(err))
  }

}



export {asynchandler}

// old way 
// this is called higher order function 
// const asynchandler=(fn)=> async(req,res,next)=>  { 
//   try {
//     await fn(req,res,next)
    
//   } catch (error) {
//     // console.log("Error",error);

//     res.status(error.code || 500).json({
//       success:false ,
//       message:error.message 
//     })
    
//   }




// }