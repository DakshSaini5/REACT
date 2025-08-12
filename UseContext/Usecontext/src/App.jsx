import { createContext, useState } from 'react'
import './App.css'
import C1 from './Compo/C1';

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [user, setUser]  = useState({name : "Daksh"});
  
  const [theme,setTheme] = useState('light');
  return (

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style= {{background:theme === 'light'?"beige":"black"}}>
      <C1 />

      </div>
    </ThemeContext.Provider>


  )
}

export default App
// export {UserContext}
export {ThemeContext}