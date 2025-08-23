import { useCallback, useState } from 'react'
import './App.css'
import ChildCompo from './compo/ChildCompo';
import Expensive from './compo/Expensive';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1)
  },[count])

  return (
   <div className='div'>

    {/* <div>
      Count : {count}
    </div> */}

    <div>
      {/* <button onClick={handleClick}>
        Increment
       </button> */}
    </div>

    <div>
      {/* <ChildCompo
       buttonName = "Click Me"
       handleClick = {handleClick}
       /> */}
    </div>

    <div>
      <Expensive />
    </div>
   </div>
  )
}

export default App
