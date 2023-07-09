import React from 'react'

const Button = ({bgColore, color,size,text,borderRadius}) => {
  return (
    <button type='button' style={{background:bgColore,color,borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}

    </button>
  )
}

export default Button