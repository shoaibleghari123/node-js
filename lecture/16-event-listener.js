const EventEmitter = require('events') //events moduel return class
//events are core building block of node
const customEmitter = new EventEmitter() //create the object of the class

//on and emit methods
//built in modules utilize it

customEmitter.on('response', () => {
  //on is a listener method of an event
  console.log('data received')
})

customEmitter.on('response', () => {
  console.log('some logic here')
})

customEmitter.emit('response') //trigger the event is like dispatch method in php
