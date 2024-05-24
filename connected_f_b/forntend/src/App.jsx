import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
function App() {
 const [jokes,setJokes]=useState([])

useEffect(()=>{
  axios.get("/api/jokes").
  then((res)=>{
    setJokes(res.data)

  }).catch((error)=>{
    console.log("error",error);
  })
},[])

  return (
    <>
      
      <h1> hi shashi</h1>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.conent}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
