import io from 'socket.io-client'

export default function() {
  const socket = io.connect('http://localhost:3001')

  function registerHandler(onMessageReceived: any) {
    socket.on('message', onMessageReceived)
  }

  function unregisterHandler() {
    socket.off('message')
  }

  socket.on('error', function(err: Error) {
    console.log('received socket error:')
    console.log(err)
  })

  function register(name: string, cb: string) {
    socket.emit('register', name, cb)
  }

  function join(chatroomName: string, cb: string) {
    socket.emit('join', chatroomName, cb)
  }

  function leave(chatroomName: string, cb: string) {
    socket.emit('leave', chatroomName, cb)
  }

  function message(chatroomName: string, msg: string, cb: string) {
    socket.emit('message', { chatroomName, message: msg }, cb)
  }

  function getOnlineUsers(cb: string) {
    socket.emit('onlineUsers', null, cb)
  }

  return {
    register,
    join,
    leave,
    message,
    getOnlineUsers,
    registerHandler,
    unregisterHandler
  }
}
