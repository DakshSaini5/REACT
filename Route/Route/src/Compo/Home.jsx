import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function Handleclick () {
      navigate('/about')
  }
  return (
    <div>
      <button onClick={Handleclick}>
        About
      </button>
    </div>
  )
}

export default Home