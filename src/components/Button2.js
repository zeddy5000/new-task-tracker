import React from 'react'

const Button2 = ({text,color,onClick}) => {
  return (
    <button text={text} style={{backgroundColor:color}} onClick={onClick} className='btn'>{text}</button>
  )
}

export default Button2