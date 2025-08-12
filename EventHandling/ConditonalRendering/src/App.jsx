import { useState } from 'react'
import './App.css'
import Logoutbtn from './Components/Logoutbtn'
import Loginbtn from './Components/Loginbtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  if(!isLoggedIn) {                           //Early Access
    return (
      <Loginbtn/>       
    )
  }


  // return (
  //   <div>                                   // THROUGH LOGICAL OPERATOR 
  //     <h1>Welcome Everyone </h1>
  //     <div>
  //       {isLoggedIn && <Logoutbtn/>}
  //     </div>
  //   </div>
  // )


  // return (
  //   <div>
  //     {isLoggedIn ? <Logoutbtn/> : <Loginbtn/>}   // ternary operator
  //   </div>
  // )


  // if (isLoggedIn) {
  //   return (
  //     <Logoutbtn name= " Daksh Saini"/>
  //   )
  // }
  // else {
  //   return (
  //     <Loginbtn name= " Dakshhh" />
  //   )
  // } 
}

export default App
