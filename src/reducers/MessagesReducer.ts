import { ADD_MESSAGE, ADD_NOTIFICATION } from '../actions/types'

import shortid from 'shortid'

interface IState {
  messages: Array<any>
}

const initialState: IState = {
  messages: [
    {
      id: 1,
      text: 'Ckemi.😄',
      author: {
        name: 'Mia',
        userID: '456462d35465'
      }
    },
    {
      id: 2,
      text: 'Helloo',
      author: {
        name: 'Klendi',
        userID: '45646e5465'
      }
    }
  ]
}

const MessagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const msg = {
        id: shortid.generate(),
        text: action.payload.message,
        author: action.payload.author,
        type: action.payload.type
      }
      return { ...state, messages: [...state.messages, msg] }

    case ADD_NOTIFICATION:
      const notification = {
        id: shortid.generate(),
        text: action.payload.message,
        type: action.payload.type
      }
      return { ...state, messages: [...state.messages, notification] }

    default:
      return state
  }
}

export default MessagesReducer
