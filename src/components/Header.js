import React from 'react'

export const Header = ({ id, children }) => {
  return (
    <>
      <h1>Challenge {id}</h1>
      <p>{children}</p>
    </>
  )
}
