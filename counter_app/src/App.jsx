import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)
// let counter = 0;

const increment = ()=> {
  console.log("clicked", count); 
    if(count < 20){
      setCount(count + 1) 
    }
  
}

const decrement = ()=> {
  console.log("clicked", count);
  if(count >= 1)
  setCount(count - 1)
  }

  return (
    <>
    <h1>Counter App :{count}</h1>
    <h2>Change the counter to : {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}> onclDecrement</button>
    </>
  )
}

export default App
