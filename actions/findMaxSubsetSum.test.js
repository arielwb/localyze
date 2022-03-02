import { findMaxSubsetSum } from './findMaxSubsetSum'

describe('findMaxSubsetSum', () => {
  describe('should return the subset in which the sum of the elements is the maximum sum', () => {
    it('when the subset is in between negative numbers', () => {
      const maxSum = findMaxSubsetSum([2, -4, 6, 8, -10, 100, -6, 5])
      expect(maxSum).toEqual([2, 5])
    })

    it('when the subset goes until the end of the array', () => {
      const maxSum = findMaxSubsetSum([2, -4, 6, 8, -10, 100, -6, 50])
      expect(maxSum).toEqual([2, 7])
    })

    it('when all the numbers are positive', () => {
      const maxSum = findMaxSubsetSum([1, 2, 3, 4])
      expect(maxSum).toEqual([0, 3])
    })

    it('when an empty array is given', () => {
      const maxSum = findMaxSubsetSum([])
      expect(maxSum).toEqual([])
    })

    it('when the subset is after the last negative number', () => {
      const maxSum = findMaxSubsetSum([2, -4, 6, 8, -10, 100, -6, -200, 500, 45, 10])
      expect(maxSum).toEqual([8, 10])
    })

    it('when all the numbers are negative', () => {
      const maxSum = findMaxSubsetSum([-12, -4, -3, -4, -10, -6])
      expect(maxSum).toEqual([2, 2])
    })

    it('when the are consecutive negative numbers', () => {
      const maxSum = findMaxSubsetSum([-2, -4, -3, -4, 6, 8, -10, 100, -6])
      expect(maxSum).toEqual([4, 7])
    })

    it('when the are consecutive negative numbers in the last range', () => {
      const maxSum = findMaxSubsetSum([-2, -4, 6, 8, -10, 100, -6, -200, -500, -45, -10])
      expect(maxSum).toEqual([2, 5])
    })

    it('and include zeros', () => {
      const maxSum = findMaxSubsetSum([2, -4, 6, 8, -10, 100, 0, -6, 3, 1, 1])
      expect(maxSum).toEqual([2, 6])
    })
  })
})
