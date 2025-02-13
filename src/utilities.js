function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

export function generateRandomNumbers(n, max) {
  let randomNumbers = []
  while(randomNumbers.length < n) {
    let randomNumber = getRandomNumber(max)
    if(randomNumbers.indexOf(randomNumber) === -1) randomNumbers.push(randomNumber)
  }

  return randomNumbers
}

export function shuffleArray(array) {
  const temp = [...array]
  temp.sort(() => Math.random() - 0.5)
  return temp
}

