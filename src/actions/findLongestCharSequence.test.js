import { findLongestCharSequence } from './findLongestCharSequence'

describe('findLongestCharSequence', () => {
  it('should return the longest char sequence of the given string', () => {
    const charSequence = findLongestCharSequence('Pressuuuuuure')

    expect(charSequence).toBe('uuuuuu')
  })

  it('should return the first sequence if there are more than one matches', () => {
    expect(findLongestCharSequence('Pressuure')).toBe('ss')
    expect(findLongestCharSequence('Boat')).toBe('B')
  })

  it('should include special characters as sequences', () => {
    expect(findLongestCharSequence('A hot  dog')).toBe('  ')
    expect(findLongestCharSequence('A hot   dog')).toBe('   ')
    expect(findLongestCharSequence('A hot\n\ndog')).toBe('\n\n')
  })
})
