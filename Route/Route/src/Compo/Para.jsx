import React from 'react'
import { useParams } from 'react-router-dom'

const Para = () => {
    const {id} = useParams();

  return (
    <div>
        Para:{id}
    </div>
  )
}

export default Para