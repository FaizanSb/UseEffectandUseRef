import { useState } from 'react'
import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(50)

  useEffect(() => {
    console.log("Count Changed", count)
  }, [count])
  

  return (
   <>
   <h1>hello</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <h1>Count: {count}</h1>
   </>
  )
}

export default App
