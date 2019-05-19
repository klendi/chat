import io from 'socket.io-client'
import {
  sendMessage,
  sendNotification,
  join as join2,
  leave as leaveRoom
} from './actions'

const socket = io.connect('http://localhost:5000')

socket.on('userJoined', (user: any) => {
  join2(user.name)
})

socket.on('userLeft', (user: any) => {
  leaveRoom(user)
})

socket.on('newMessage', (data: any) => {
  sendMessage(data.text, data.author)
})

function join(user: Object) {
  socket.emit('join', user)
}

socket.on('connection', (socket: any) => {
  console.log('this got called from client')
})

function leave(user: Object) {
  socket.emit('leave', user)
}

interface IMessage {
  text: string
  author: Object
  type: string
  id: string
}

function _sendMessage(msg: IMessage) {
  socket.emit('message', msg)
}

export { join, leave, _sendMessage, socket }
