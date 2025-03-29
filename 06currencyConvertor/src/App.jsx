import { useState } from 'react'
import './App.css'
import './Components/input'
import InputBox from './Components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-orange-300'>Curreny App</h1>
     <InputBox />
    </>
  )
}

export default App
