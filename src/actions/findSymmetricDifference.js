const getUniqueItems = (reference, set) => reference.filter(number => !set.has(number))

export const findSymmetricDifference = (sample1, sample2) => {
  if (sample1.length > 100 || sample2.length > 100) {
    return null
  }

  const set1 = new Set(sample1)
  const set2 = new Set(sample2)

  return [...getUniqueItems(sample1, set2), ...getUniqueItems(sample2, set1)]
}
