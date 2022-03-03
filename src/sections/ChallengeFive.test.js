import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import { ChallengeFive } from './ChallengeFive'
import * as actions from '../actions/findSymmetricDifference'

describe('ChallengeFive', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<ChallengeFive />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call findSymmetricDifference function on submit', () => {
    const findSymmetricDifferenceSpy = jest.spyOn(actions, 'findSymmetricDifference')

    render(<ChallengeFive />)

    const button = screen.getByTestId('submit-button')
    const input = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: '[1, 2, 3] | [3, 4]' } })
    fireEvent.submit(button)

    expect(findSymmetricDifferenceSpy).toHaveBeenCalled()
  })
})
