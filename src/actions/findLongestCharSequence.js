export const findLongestCharSequence = (word) => {
  let longestCharSequence = ''
  let currentCharSequence = ''
  const characters = [...word]

  characters.forEach(char => {
    if (!longestCharSequence) {
      longestCharSequence = char
      currentCharSequence = char

      return
    }

    currentCharSequence = currentCharSequence[0] !== char
      ? char
      : currentCharSequence + char

    if (currentCharSequence.length > longestCharSequence.length) {
      longestCharSequence = currentCharSequence
    }
  })

  return longestCharSequence
}
