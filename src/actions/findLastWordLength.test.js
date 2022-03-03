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

  it('should return null if the string has a length smaller then 1', () => {
    const lastWordLength = findLastWordLength('')
    expect(lastWordLength).toEqual(null)
  })

  it('should return null if the string has a length smaller then 104', () => {
    const lastWordLength = findLastWordLength('Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore')
    expect(lastWordLength).toEqual(null)
  })
})
