import React from 'react'

function PropsPractice({title, color}) {
  return (
    
    <button className={`py-1 px-3 ${color} rounded-md m-2`}>
        {title}
    </button>

  )
}

export default PropsPractice