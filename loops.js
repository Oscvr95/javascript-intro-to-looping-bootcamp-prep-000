let strangeArray = []

function forLoop(strangeArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      strangeArray.push("I am 1 strange loop.")
    } else {
      strangeArray.push("I am " + ${`i`} + " strange loops.")
    }
  }
  return strangeArray
}
