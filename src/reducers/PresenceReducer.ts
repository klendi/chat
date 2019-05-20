import {
  JOIN_CHAT,
  LEAVE_CHAT,
  LOGIN,
  REFRESH_USER_LIST
} from '../actions/types'

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
      const users = state.users.map((user: any) => user.id)
      const alreadyExists = users.indexOf(action.payload.id)

      if (alreadyExists === -1) {
        //it doesn't exist so add it
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      } else {
        //it exists once, don't add it again
        return state
      }

    case LOGIN:
      return {
        ...state,
        user: action.payload
      }

    case REFRESH_USER_LIST:
      console.log('reducer: we got users list', action.payload)
      return {
        ...state,
        users: action.payload
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
