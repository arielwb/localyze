
import React, { useState } from 'react'
import { Header, Input, OutputBox } from '../components'
import { findSymmetricDifference } from '../actions/findSymmetricDifference'

export const ChallengeFive = () => {
  const [result, setResult] = useState([])
  const [userInput, setUserInput] = useState('')

  const onSubmit = () => {
    const [arr1, arr2] = userInput.split('|')
    if (arr1.length && arr2.length) {
      try {
        const symmetricDifference = findSymmetricDifference(JSON.parse(arr1), JSON.parse(arr2))

        setResult(JSON.stringify(symmetricDifference))
      } catch (error) {
        console.log('Could not convert string to array, please check your input')
      }
    }
  }

  return (
    <>
      <Header id={5}>
        Given two arrays of integers (lengths n and m), find the symmetric difference between them.
        Items are unique within a single array.
      </Header>
      <Input
        label='Type the two arrays separated by a pipe, ex: [1, 2, 3] | [3, 4]'
        name='challenge5'
        type='text'
        value={userInput}
        onSubmit={onSubmit}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <OutputBox>{result}</OutputBox>
    </>
  )
}
