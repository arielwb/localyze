import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import { ChallengeOne } from './ChallengeOne'
import * as actions from '../actions/findLongestCharSequence'

describe('ChallengeOne', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<ChallengeOne />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call findLongestCharSequence function on submit', () => {
    const findLongestCharSequenceSpy = jest.spyOn(actions, 'findLongestCharSequence')
    render(<ChallengeOne />)
    const button = screen.getByTestId('submit-button')
    const input = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: 'new value' } })
    fireEvent.submit(button)

    expect(findLongestCharSequenceSpy).toHaveBeenCalled()
  })
})
