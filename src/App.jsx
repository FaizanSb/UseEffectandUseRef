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
  const handleClick = () => {
    inputRef.current.count++;
    inputRef.current.style.background = "lightblue";
    inputRef.current.value = "Faizan";
  }

  

  return (
   <>
   <h1>hello</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <h1>Count: {count}</h1>
    <input ref={inputRef} type="text" placeholder='Enter something' />

    <button onClick={() => handleClick()}>Focus on input</button>

    {/* <div className="test">
        Hello this is a useRef test div for focus.
    </div> */}

   </>
  )
}

export default App
