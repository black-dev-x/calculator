import './Button.css'
import React from 'react'

const Button = props => (
  <button
    onClick={_ => props.click(props.label)}
    className={`
        Button 
        ${props.operation ? 'operation' : ''} 
        ${props.double ? 'double' : ''} 
        ${props.triple ? 'triple' : ''}
    `}
  >
    {props.label}
  </button>
)

export default Button
