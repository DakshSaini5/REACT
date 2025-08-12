import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';

function App() {
  const [count, setCount] = useState(0);

  function PressButton() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button onClick={PressButton} text="Click me">
        <Counter>
          <h1>{count}</h1>
        </Counter>
      </Button>
    </div>
  ); 
}

export default App;

