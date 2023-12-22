import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
      <button className='px-4 py-1 shadow-lg rounded-full text-white' style={{backgroundColor: "red"}} onClick={()=> setColor("red")}> Red </button>
      <button className='px-4 py-1 shadow-lg rounded-full text-white' style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>  Green </button>
      <button className='px-4 py-1 shadow-lg rounded-full text-white' style={{backgroundColor: "blue"}}onClick={()=> setColor("blue")}> Blue </button>
      <button className='px-4 py-1 shadow-lg rounded-full text-white' style={{backgroundColor: "yellowgreen"}}onClick={()=> setColor("yellowgreen")} > Yellow </button>
       </div>
    </div>
   </div>
  )
}

export default App
