import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  
  
  //UseRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQUSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str += "0987654321"
   if(charAllowed) str += " !@#$%^&*-_+=['"

   for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)
   }



  setPassword(pass)
   
  }, [length, numberAllowed, charAllowed, setPassword]);
   

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();    // helps to select texts inside the input field
    window.navigator.clipboard.writeText(password);
  }, [password])

  // Using UseEffect Hook which accept callback function and dependency array
  useEffect(()=> {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator])
  

  return (
    <>
    <div className='w-full text-xl max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-white bg-gray-800'> 
    Password Generator 

    <div className='my-4 flex shadow-md rounded-lg overflow-hidden mb-4'>
     <input 
     
     type="text"
     value={password}
     className='outline-none w-full py-1 px-3 border rounded-md text-black'
     placeholder='password'
     readOnly 
     ref={passwordRef}
     />
     <button
     onClick={copyPasswordToClipboard}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
       copy </button>
    </div>
      
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1 '>

          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> {setLength(e.target.value)}}
          
          />
          <label>Length: {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {setNumberAllowed((prev)=> !prev)}} // it simply reverse the previous value
          
        />

        <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='CharacterAllowed'
          onChange={() => {setCharAllowed((prev)=> !prev)}} // it simply reverse the previous value
          
        />

        <label>Character</label>
        </div>


      </div>
     </div>

    </>
  )
  };  

export default App
