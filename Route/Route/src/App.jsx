import { useState } from 'react'
import './App.css'
import { createBrowserRouter, 
RouterProvider } from 'react-router-dom';
import Home from './Compo/Home';
import About from './Compo/About';
import Navbar from './Compo/Navbar';
import { Link } from 'react-router-dom';
import './Compo/Navbar.css';
import Para from './Compo/Para';
import Courses from './Compo/Courses';
import Notfound from './Compo/Notfound';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path : "/about",
      element :<div>
        <Navbar/>
        <About/>
      </div>, 
      children:[
        {
          path: 'courses',
          element : <Courses />
        }
      ]
    },
    {
      path : "/student/:id",
      element :<div>
        <Navbar/>
        <Para/>
      </div>
    },
    {
      path :"*" ,
      element : <Notfound />
    }
  ]
)
function App() {

  return (
    <>
     <div>
      <RouterProvider router = {router} />
     </div>
    </>
  )
}

export default App
