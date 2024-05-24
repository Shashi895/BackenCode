// console.log("shashi shankar");
require('dotenv').config();

const express=require("express");
// import express from "express"
const app=express();
const port=3000;

app.get('/',(req,res)=>{
  res.send('hellow')
})

app.get('/about',(req,res)=>{
  res.send('SHASHI')


})

app.get('/login',(req,res)=>{
  res.send('<h1> plase login at cahi aur code </h1>')
})

app.listen(process.env.PORT,()=>{
  console.log(`server start ${port}`);

})
