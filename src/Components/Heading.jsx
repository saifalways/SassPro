import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h6 className={`text-4xl text-headColor ${className}`} >{text} </h6>
  )
}

export default Heading