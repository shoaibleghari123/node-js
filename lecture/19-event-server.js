const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

//using event Emitter API
const server = http.createServer()
//emits request event - on('request'
//subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})
//server emit the event by self
server.listen(5000)
