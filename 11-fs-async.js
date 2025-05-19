const { log } = require('console')
const { readFile, writeFile, write } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async',
      `Here is the content : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          log(err)
          return
        }
        log('done with this task')
      })
  })
})

console.log('starting the next task')
