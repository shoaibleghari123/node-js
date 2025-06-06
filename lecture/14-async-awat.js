const { readFile } = require('fs')

const getText = (path) => {
  return new Promise((reject, resolve) => {
    readFile(path, 'utf8', (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

const start = async () => {
  try {
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')
    console.log(first, second)
  } catch (err) {
    console.log(err)
  }
}

start()

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
