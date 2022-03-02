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

    if (currentCharSequence[0] !== char) {
      if (currentCharSequence.length > longestCharSequence.length) {
        longestCharSequence = currentCharSequence
      }

      currentCharSequence = char
    } else {
      currentCharSequence += char
    }
  })

  return longestCharSequence
}
