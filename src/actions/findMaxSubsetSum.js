const sum = (numbers) => numbers.reduce((currentSum, value) => currentSum + value, 0)

const findMaxNumberIndex = (numbers) => {
  let maxNumber = numbers[0]
  let maxNumberIndex = 0

  numbers.forEach((num, index) => {
    if (num > maxNumber) {
      maxNumber = num
      maxNumberIndex = index
    }
  })

  return maxNumberIndex
}

export const findMaxSubsetSum = (numbers) => {
  if (!numbers.length) return []

  const negativeNumbersIndex = []
  let prevIndex
  let prevSum = 0
  let startIndex = 0
  let endIndex = numbers.length - 1

  numbers.forEach((num, index) => num < 0 && negativeNumbersIndex.push(index))

  if (negativeNumbersIndex.length === numbers.length) {
    const maxNegativeNumberIndex = findMaxNumberIndex(numbers)

    return [maxNegativeNumberIndex, maxNegativeNumberIndex]
  }

  negativeNumbersIndex.forEach((negativeNumIndex) => {
    const range = numbers.slice(prevIndex, negativeNumIndex)
    const rangeSum = sum(range)

    if (prevIndex) {
      const positiveRangeSum = range.length === 1 ? rangeSum : rangeSum - numbers[prevIndex]
      const totalSum = prevSum + rangeSum

      if (positiveRangeSum > totalSum) {
        startIndex = prevIndex + 1
        prevSum = positiveRangeSum
        endIndex = negativeNumIndex - 1
      } else if (totalSum > prevSum) {
        prevSum = totalSum
        endIndex = negativeNumIndex - 1
      }
    } else {
      prevSum = rangeSum
      endIndex = negativeNumIndex - 1
    }

    prevIndex = negativeNumIndex
  })

  const lastNegativeIndex = negativeNumbersIndex.pop()

  if (lastNegativeIndex !== numbers.length - 1) {
    const lastRange = numbers.slice(lastNegativeIndex)
    const lastRangeSum = sum(lastRange)
    const lastPositiveRangeSum = lastRangeSum - numbers[lastNegativeIndex]

    if (lastPositiveRangeSum > prevSum) {
      startIndex = lastNegativeIndex + 1
      endIndex = numbers.length - 1
    } else if (prevSum + lastRangeSum > prevSum) {
      endIndex = numbers.length - 1
    }
  }

  return [startIndex, endIndex]
}
