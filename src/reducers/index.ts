import { combineReducers } from 'redux'
import MessagesReducer from './MessagesReducer'
import PresenceReducer from './PresenceReducer'

export default combineReducers({
  MessagesReducer,
  PresenceReducer
})
