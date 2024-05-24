import express from 'express';
const app=express();

// app.get("/",(req,res)=>{
//   res.send("server ready")

// })

// get a list of 5 jokes

app.get("/api/jokes",(req,res)=>{
  const jokes=[
    {
      id:1,
      title:"A jokes",
      conent:"Thisis A jokes"
    },
    {
      id:4,
      title:"A jokes",
      conent:"Thisis D jokes"
    },
    {
      id:2,
      title:"B jokes",
      conent:"Thisis B jokes"
    },
    {
      id:3,
      title:"C jokes",
      conent:"Thisis C jokes"
    },
  ];
  res.send(jokes);

});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`server start in port  no  ${port}`);
});
