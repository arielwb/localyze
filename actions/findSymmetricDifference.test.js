import { findSymmetricDifference } from './findSymmetricDifference'

describe('findSymmetricDifference', () => {
  it('should return an array with the symmetric difference of the given arrays', () => {
    const uniqueItems = findSymmetricDifference([1, 2, 3], [3, 4])

    expect(uniqueItems).toEqual([1, 2, 4])
  })

  it('should return an array with the symmetric difference when one of the arrays is empty', () => {
    const uniqueItems = findSymmetricDifference([1, 2, 3], [])

    expect(uniqueItems).toEqual([1, 2, 3])
  })

  it('should return an array with the symmetric difference when both arrays is empty', () => {
    const uniqueItems = findSymmetricDifference([], [])

    expect(uniqueItems).toEqual([])
  })

  it('should return null if one of the arrays has a length greater than 100', () => {
    const hugeArray = [...Array(101).keys()]
    const uniqueItems = findSymmetricDifference([1, 2, 3], hugeArray)

    expect(uniqueItems).toEqual(null)
  })
})
