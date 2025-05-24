const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} witn id: ${id}`)
})

customEmitter.emit('response', 'John', 30)
