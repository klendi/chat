import { JOIN_CHAT, LEAVE_CHAT, ADD_MESSAGE, LOGIN } from './types'
import store from '../store'
import shortid from 'shortid'

interface IUser {
  name: string
  id: string
}

export function sendMessage(message: string, author: Object) {
  store.dispatch({
    type: ADD_MESSAGE,
    payload: {
      id: shortid.generate(),
      message,
      author,
      type: 'message'
    }
  })
}

export function sendNotification(message: string) {
  store.dispatch({
    type: ADD_MESSAGE,
    payload: {
      message,
      type: 'notification'
    }
  })
}

export function login(username: string) {
  const user: IUser = {
    name: username,
    id: shortid.generate()
  }
  store.dispatch({
    type: LOGIN,
    payload: user
  })
}

export function join(username: string) {
  const user: IUser = {
    name: username,
    id: shortid.generate()
  }
  sendNotification(`${username} has joined the chat`)
  store.dispatch({
    type: JOIN_CHAT,
    payload: user
  })
}

export function leave(user: IUser) {
  sendNotification(`${user.name} has left the chat`)
  store.dispatch({
    type: LEAVE_CHAT,
    payload: user
  })
}
