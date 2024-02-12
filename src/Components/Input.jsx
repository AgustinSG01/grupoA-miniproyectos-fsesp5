import React from 'react'

const Input = ({ handleChange, value, placeholder }) => {
  return (
      <input onChange={ handleChange } value = { value } placeholder={placeholder} ></input>
  )
}

export default Input