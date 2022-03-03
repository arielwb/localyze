import React, { useState } from 'react'
import { Header, Input, OutputBox } from '../components'
import { findLongestCharSequence } from '../actions/findLongestCharSequence'

export const ChallengeOne = () => {
  const [result, setResult] = useState()
  const [userInput, setUserInput] = useState('')

  const onSubmit = (event) => {
    const longestCharSequence = findLongestCharSequence(userInput)
    setResult(longestCharSequence)
  }

  return (
    <>
      <Header id={1}>
        Given a word, write an algorithm that returns the sequence of a specific
        character that appears the most in sequence.
        If there are many sequences like that, return the first longest sequence.
      </Header>
      <Input
        label='Ex: Pressuuuuuure'
        name='challenge1'
        type='text'
        value={userInput}
        onSubmit={onSubmit}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <OutputBox>{result}</OutputBox>
    </>
  )
}
