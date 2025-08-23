import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState()
  
  

  function expensiveTask(num) {                                       //This is a expensive function 
    for(let i = 0 ; i<=100000000; i++){}
    return num*2;
  }

  let doubleValue = useMemo(()=> expensiveTask(input),[input]);

  return (
    <div className='use'>
      hello everyone

      <button
      onClick={() => {setCount(count + 1)}}>

        Increase Count : {count}

      </button>

      
      <input 
      type="number"
      placeholder='Number' 
      value = {input}
      onChange={(e) => setInput(e.target.value)}
      />

      <div>
       <p>Number is :{doubleValue} </p> 
      </div>

    </div>
  )
}

export default App
