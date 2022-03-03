import React, { useState } from 'react'
import { Header, Input, OutputBox } from '../components'
import { findMaxSubsetSum } from '../actions/findMaxSubsetSum'

export const ChallengeTwo = () => {
  const [result, setResult] = useState()
  const [userInput, setUserInput] = useState('')

  const onSubmit = (event) => {
    const maxSubsetSequence = findMaxSubsetSum(JSON.parse(userInput))
    setResult(JSON.stringify(maxSubsetSequence))
  }

  return (
    <>
      <Header id={2}>
        Given a set of numbers, find the subset in which the sum of the elements is the maximum sum.
      </Header>
      <Input
        label='Ex: [2, -4, 6, 8, -10, 100, -6, 5]'
        name='challenge2'
        type='text'
        value={userInput}
        onSubmit={onSubmit}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <OutputBox>{result}</OutputBox>
    </>
  )
}
