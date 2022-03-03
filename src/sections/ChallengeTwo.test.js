import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import { ChallengeTwo } from './ChallengeTwo'
import * as actions from '../actions/findMaxSubsetSum'

describe('ChallengeTwo', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<ChallengeTwo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call findMaxSubsetSum function on submit', () => {
    const findMaxSubsetSumSpy = jest.spyOn(actions, 'findMaxSubsetSum')

    render(<ChallengeTwo />)

    const button = screen.getByTestId('submit-button')
    const input = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: '[2, -4, 6, 8, -10, 100, -6, 5]' } })
    fireEvent.submit(button)

    expect(findMaxSubsetSumSpy).toHaveBeenCalled()
  })
})
