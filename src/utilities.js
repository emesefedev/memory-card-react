function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function generateRandomNumbers(n, max) {
  let randomNumbers = [];
  while(randomNumbers.length < n) {
    let randomNumber = getRandomNumber(max)
    if(randomNumbers.indexOf(randomNumber) === -1) randomNumbers.push(randomNumber);
  }

  return randomNumbers
}

