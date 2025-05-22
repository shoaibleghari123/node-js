const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8')
    // const second = await readFilePromise('./content/second.txt', 'utf8')

    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')

    await writeFile(
      './content/result-file.txt',
      `THIS IS THE RESULT: ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (err) {
    console.log(err)
  }
}

start()

// const getText = (path) => {
//   return new Promise((reject, resolve) => {
//     readFile(path, 'utf8', (err, res) => {
//       if (err) reject(err)
//       else resolve(res)
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
