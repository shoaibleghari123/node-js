const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
  console.log(`data received ${name} ${age}`)
})
//customEmitter.emit('response')// it will not call the below listener. order matter
customEmitter.on('response', () => {
  console.log('some logic here')
})

customEmitter.emit('response', 'John', 40) //with additional argument
