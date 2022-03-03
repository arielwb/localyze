import React from 'react'
import renderer from 'react-test-renderer'
import { OutputBox } from './OutputBox'

describe('OutputBox', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<OutputBox>A beautiful output</OutputBox>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
