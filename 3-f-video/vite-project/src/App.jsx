import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setjokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setjokes(res.data);

    })
    .catch((error)=>{
      console.log(error)

    });
  });
  return (
    <>
    <h1>Jokes App</h1>
    <p>JOKES : {jokes.length}</p>
    {
      jokes.map((jok)=>(
        <div key={jok.id}></div>

      ))
    }
    
    </>
  )
}

export default App
