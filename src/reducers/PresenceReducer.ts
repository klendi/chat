import { JOIN_CHAT, LEAVE_CHAT, LOGIN } from '../actions/types'

interface IState {
  users: Array<string>
  user: Object
}

const initialState: IState = {
  users: [],
  user: {}
}

const PresenceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case JOIN_CHAT:
      return {
        ...state,
        users: [...state.users, action.payload]
      }

    case LOGIN:
      return {
        ...state,
        user: action.payload
      }

    case LEAVE_CHAT:
      //@ts-ignore
      const newUsers = state.users.filter(user => user.id !== action.payload.id)
      return { ...state, users: newUsers }

    default:
      return state
  }
}

export default PresenceReducer
