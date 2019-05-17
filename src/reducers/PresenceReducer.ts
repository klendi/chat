import { JOIN_CHAT, LEAVE_CHAT } from '../actions/types'

interface IState {
  users: Array<string>
  user: Object
}

const initialState: IState = {
  users: ['Klendi', 'Kristi'],
  user: {
    name: 'Klendi'
  }
}

const PresenceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case JOIN_CHAT:
      return { ...state, users: [...state.users, action.payload] }

    case LEAVE_CHAT:
      const newUsers = state.users.filter(user => user !== action.payload)
      return { ...state, users: newUsers }

    default:
      return state
  }
}

export default PresenceReducer
