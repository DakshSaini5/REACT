import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // const val =  useRef(1);
  // const btnRef = useRef();

  const [time, setTime] = useState(0);
  const tt = useRef(null);

  function startTimer() {
   tt.current = setInterval(() => {
    setTime(time => time + 1)
   }, 1000);
  } 

  function stopTimer () {
    clearInterval(tt.current);
    tt.current = null;
  }

  function resetTime() {
    stopTimer()
    setTime(0);
  }

  // function handleIncrement () {
  //   val.current = val.current + 1;
  //   console.log("value of val :",val.current);
  //   setCount(count + 1);
  // }

  // function changeColor() {
  //   btnRef.current.style.background = "blue";
  // }

   useEffect(() => {
    console.log("Time Increasing")
   })

  return (
    <div className='Incrementing'>

      Daksh Saini

      <br />
      <br />

        <div className='StopWatch'>
          StopWatch : {time} Seconds
        </div>

        <br />

        <button
        ref = {tt}
        onClick={startTimer}>
          Start
        </button>

        <br />

        <button
        onClick={stopTimer}>
          Stop
        </button>

        <br /> 

        <button
        onClick={resetTime}>
          Reset
        </button>


        {/* <button 
        ref = {btnRef}
        onClick={handleIncrement}>
           Click Here
        </button>

        <br />

        <button
        onClick={changeColor}>
          Change Color of "Click Here"
        </button>

        <br />

      <div>
        Count : {count}
      </div> */}

    </div>
  )
}

export default App
