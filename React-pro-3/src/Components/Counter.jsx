import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <p id='para'>You Have Clicked {count} Times</p>
      <button id='btn' onClick={ () => { setCount(count + 1) }}> Click Idhar kar lode</button>
    </div>
  )
}

export default Counter