import React, { Children } from 'react'

const Logoutbtn = (props) => {
  return (
    <button>
        Logout
        {props.name}
    </button>
  )
}

export default Logoutbtn