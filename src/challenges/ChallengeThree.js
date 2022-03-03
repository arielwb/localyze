import React, { useState } from 'react'
import { Header, Input, OutputBox } from '../components'
import { findLastWordLength } from '../actions/findLastWordLength'

export const ChallengeThree = () => {
  const [result, setResult] = useState()
  const [userInput, setUserInput] = useState('')

  const onSubmit = (event) => {
    const lastWordLength = findLastWordLength(userInput)
    setResult(lastWordLength)
  }

  return (
    <>
      <Header id={3}>
        Given a string `s` consists of some words separated by some number of spaces,
        return the length of the last word in the string.
        A word is a maximal substring consisting of non-space characters only.
      </Header>
      <Input
        label='Ex: Hello World'
        name='challenge3'
        type='text'
        value={userInput}
        onSubmit={onSubmit}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <OutputBox>{result}</OutputBox>
    </>
  )
}
