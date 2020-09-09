let strangeArray = []

function forLoop(strangeArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      strangeArray.push(`I am ${i} strange loop.`)
    } else {
      strangeArray.push(`I am ${i} strange loops.`)
    }
  }
  return strangeArray
}
