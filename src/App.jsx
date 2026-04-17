import { useState } from 'react'
import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(50)
  const inputRef = useRef();

  useEffect(() => {
    console.log("Count Changed", count)
  }, [count])
  
  // useEffect(() => {
  //   inputRef.current.focus()
  // }
  //  , [])
  

  return (
   <>
   <h1>hello</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <h1>Count: {count}</h1>
    <input ref={inputRef} type="text" placeholder='Enter something' />

    <button onClick={() => inputRef.current.focus()}>Focus on input</button>
   </>
  )
}

export default App
