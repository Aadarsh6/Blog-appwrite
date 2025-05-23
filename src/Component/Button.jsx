import React from 'react'

const Button = ({
    text,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className ="",
    ...props

}) => {
  return (
    <button className={`px-4 py-2 rounded-lg shadow-md ${bgColor} ${textColor} ${className} ${type}`}{...props}>
        {text}
    </button>
  )
}

export default Button
