import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<Input type='text' value='a value' label='A test' name='test' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call the given onSubmit function', () => {
    const onSubmitSpy = jest.fn()
    render(
      <Input
        type='text'
        label='A test'
        name='test'
        onSubmit={onSubmitSpy}
      />
    )
    const button = screen.getByTestId('submit-button')

    fireEvent.submit(button)

    expect(onSubmitSpy).toHaveBeenCalled()
  })

  it('should call the given onChange function', () => {
    const onChangeSpy = jest.fn()
    render(
      <Input
        type='text'
        value='initial value'
        label='A test'
        name='test'
        onChange={onChangeSpy}
      />
    )
    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'new value' } })

    expect(onChangeSpy).toHaveBeenCalled()
  })
})
