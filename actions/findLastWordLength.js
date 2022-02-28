export const findLastWordLength = (string) => {
  const getLastWord = /(\w+)\s*$/
  const lastWord = getLastWord.exec(string)[1]

  return lastWord.length
}
