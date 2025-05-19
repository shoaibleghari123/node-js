const { log } = require('console')
const { readFile, writeFile, write } = require('fs')

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
        log(result)
      }
    )
  })
})
