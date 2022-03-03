import React from 'react'

export const Input = ({ type, value, label, name, onSubmit, onChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit && onSubmit(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={name}>{label}</label>
      <input data-testid='input' name={name} type={type} onChange={onChange} value={value} />
      {onSubmit && <button type='submit' data-testid='submit-button'>confirm</button>}
    </form>
  )
}
