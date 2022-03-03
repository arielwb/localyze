import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import { ChallengeThree } from './ChallengeThree'
import * as actions from '../actions/findLastWordLength'

describe('ChallengeThree', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<ChallengeThree />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call findLastWordLength function on submit', () => {
    const findLastWordLengthSpy = jest.spyOn(actions, 'findLastWordLength')

    render(<ChallengeThree />)

    const button = screen.getByTestId('submit-button')
    const input = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: 'Hello World' } })
    fireEvent.submit(button)

    expect(findLastWordLengthSpy).toHaveBeenCalled()
  })
})
