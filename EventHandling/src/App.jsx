import { useState } from 'react'
import Color from './Color.jsx';
import './App.css'

function App() {

  // function handleClick() {
  //   alert('You Just click')
  // }

  // function handleMouseOver () {
  //   alert("Para ke upar cursor")
  // }

  // function handleInputChange (e) {
  //   console.log("Value Chnaging In Input :", e.target.value)
  // }

  // function submit (e){
  //   e.preventDefault();
  //   alert("Submission Done")
  // }

  const [click, setClick] = useState(0);

  function handleClickOutside() {
    setClick(click => click + 1);
  }

function getRandomLightColor () {
  let r = 220 + Math.round(Math.random() * 35);
  let g = 150 + Math.round(Math.random() * 50);
  let b = 130 + Math.round(Math.random() * 50);
  return `rgb(${r}, ${g}, ${b})`;
}


  function handleChangeColor (){ 
    let bodyStyle = document.body.style;
    bodyStyle.background = getRandomLightColor();
  }

  return (
   <div>
{/* 
    /*{ <form onSubmit={submit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
    </form>

    <p onMouseOver={handleMouseOver}>
      I am Daksh Saini
    </p>
      <button className='btn' onClick={handleClick}>
        click me
      </button> */} 

      <div style={{width : '100%', height : '100%'}} onClick={handleClickOutside}>
      <Color  onChangeColor={handleChangeColor}/>
        <br />
        <br />
        <h2>Click On The Page {click}</h2>
      </div>
   </div>
  )
}

export default App
