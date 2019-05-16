import { ADD_MESSAGE_FAIL, ADD_MESSAGE_SUCCESS } from '../actions/types'

interface IState {
  messages: Array<any>
}

const initialState: IState = {
  messages: []
}

const MessagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE_SUCCESS:
      return { ...state, messages: action.payload }

    case ADD_MESSAGE_FAIL:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

export default MessagesReducer
