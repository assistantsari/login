import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15)
  //let counter=15;
  let addvalue =() =>{
    setCount(counter + 1)

  }
  let removevalue =() =>{
    setCount(counter -1)
  }

  return (
    <>
       <h1 className='bg-green-400'>CHI our React</h1>
       <h2 className='bg-green-400'>Counter value:{counter}</h2>
       
       <button onClick={addvalue}>add value</button><br />
       <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
