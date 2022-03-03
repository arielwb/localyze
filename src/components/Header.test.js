import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from './Header'

describe('Header', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<Header id={1}>A beautiful test</Header>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
