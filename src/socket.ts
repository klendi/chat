import io from 'socket.io-client'
import {
  sendMessage,
  sendNotification,
  join as join2,
  leave as leaveRoom,
  refreshUserList
} from './actions'

const socket = io.connect('http://localhost:5000')

socket.on('userJoined', (user: any) => {
  join2(user.name, user.id)
})

socket.on('userDisconnected', (user: any) => {
  leaveRoom(user)
})

socket.on('newMessage', (data: any) => {
  sendMessage(data.text, data.author)
})

//@ts-ignore
socket.on('getOnlineUsers', users => {
  console.log('client: got online users list', users)
  refreshUserList(users)
})

function join(user: Object) {
  socket.emit('join', user)
}

function leave(user: Object) {
  socket.emit('disconnect', user)
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
