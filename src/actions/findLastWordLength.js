export const findLastWordLength = (string) => {
  if (string.length < 1 || string.length > 104) {
    return null
  }

  const getLastWord = /(\w+)\s*$/
  const lastWord = getLastWord.exec(string)[1]

  return lastWord.length
}
