import {
  JOIN_CHAT,
  LEAVE_CHAT,
  ADD_MESSAGE,
  LOGIN,
  REFRESH_USER_LIST
} from './types'
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

export function login(username: string, id?: string) {
  const user: IUser = {
    name: username,
    id
  }
  store.dispatch({
    type: LOGIN,
    payload: user
  })
}

export function refreshUserList(users: [string]) {
  store.dispatch({
    type: REFRESH_USER_LIST,
    payload: users
  })
}

export function join(username: string, id?: string) {
  const user: IUser = {
    name: username,
    id
  }
  sendNotification(`${username} has joined the chat`)
  store.dispatch({
    type: JOIN_CHAT,
    payload: user
  })
}

export function leave(user: IUser) {
  sendNotification(`${user.name} has left the chat`)
  console.log('actions: trying to remove ', user.name)
  store.dispatch({
    type: LEAVE_CHAT,
    payload: user
  })
}
