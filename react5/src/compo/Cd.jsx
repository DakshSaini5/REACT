import React from 'react'

const Cd = (props) => {
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>Name changing Happen here : {props.name}</p>
    </div>
  )
}

export default Cd