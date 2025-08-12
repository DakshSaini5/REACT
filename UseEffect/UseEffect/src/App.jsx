import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count,setcount] = useState(0);
  const [total, setotal] = useState(1);
// first is a side effect functionf
// Second is a clean up function
// Third is a comma sepearated dep list

// variation 1
  // useEffect(() => {
  //   alert('oye hoye wow')    runs on every render
  // })
  

// >> Variation 2
// useEffect(() => {
//   alert('i am gonna run every time when couunt is updated')
// }, [count])

// Variations 3
//multiple dependencies
// useEffect(() => {
//   alert('COUNT AND TOTAL ARE BEING UPDATE');
// },[count,total]);

//Variation 4
// Adding a cleanup function

  useEffect(() => {
    alert('countf is updated');
  
    return () => {
      alert('count is unmounted from UI');
    }
  }, [count, total])
  

  function handleclick () {
    setcount(count + 1);
  }

  function handleclicktotal () {
    setotal (total + 1);
  }


  return (
    <div>
      <button onClick={handleclick}>
        CLICK CLICK {count}
      </button>
        <br />
        <br />
        <button onClick={handleclicktotal}>Press here : {total}

        </button>
    </div>
  )
}

export default App
