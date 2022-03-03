import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import { ChallengeFour } from './ChallengeFour'
import { filterUsersByCountry } from '../actions/filterUsersByCountry'

jest.mock('../actions/filterUsersByCountry', () => {
  return {
    __esModule: true,
    filterUsersByCountry: jest.fn(),
    sampleUsers: [{ name: 'bob', country: 'spain' }]
  }
})

describe('ChallengeFour', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match the snapshot', () => {
    const tree = renderer
      .create(<ChallengeFour />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call filterUsersByCountry function on change', () => {
    render(<ChallengeFour />)

    const input = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: 'germany' } })

    expect(filterUsersByCountry).toHaveBeenCalled()
  })
})
