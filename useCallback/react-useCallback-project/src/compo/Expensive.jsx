import React, { useRef,useCallback, useEffect, useState } from 'react'

const Expensive = () =>{

    const [count, setCount] = useState(0)
    const [text,setText] = useState("")
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {
        console.log("running expensive calculation...")
        let result = 0;
        for(let i = 0; i < 10000000; i++){
            result += i;
        }
        return result;
    },[count]) 

    useEffect(() => {
        if(previousFunction.current) {
            if(previousFunction.current === expensiveCalculation) {
                console.log("Function Not Re-Created")
            }
            else {
                console.log("Re-Created");
            }
        }
        else {
            previousFunction.current = expensiveCalculation
        }
    }, [expensiveCalculation])

  return (
    <div>
        <input type="text" 
        value ={text}
        onChange={(e) => setText (e.target.value)}
        placeholder='Type Something'
        />
        <p>Expensive Calculation Result : {expensiveCalculation()}</p>
        <button 
        onClick={() => setCount(count + 1)}
        >
            Increment Count
        </button>
    </div>
  )
}

export default Expensive