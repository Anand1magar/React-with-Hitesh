import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "anand",
    age: "12"
  }

  let newArr = [
    1,2,3,4
  ]

  return (
    <>
  <h1 className='bg-green-500 text-black p-4 rounded-xl m-4'>Tailwind test</h1>
  <Card username ="ANAND MAGAR" btnText= "click me"/>
  <Card username= "Another name" btnText="Click me again" />

    </>
  )
}

export default App
