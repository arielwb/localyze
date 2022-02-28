import { findLastWordLength } from './findLastWordLength'

describe('findLastWordLength', () => {
  it('should return the length of the last word in the given string', () => {
    const lastWordLength = findLastWordLength('Hello World')
    expect(lastWordLength).toEqual(5)
  })

  it('should only match non-space characters', () => {
    const lastWordLength = findLastWordLength(' fly me    to   the moon   ')
    expect(lastWordLength).toEqual(4)
  })
})
