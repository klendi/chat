import { ADD_MESSAGE_FAIL, ADD_MESSAGE_SUCCESS } from '../actions/types'

interface IState {
  messages: Array<any>
}

const initialState: IState = {
  messages: [
    {
      id: 1,
      text:
        'CkemiCkemiCkemiCkemiCkemdsadsadsadasdasdasdasdasdasdiCkemiCkemiCkemi.😄',
      user: 'klendi',
      isUser: true
    },
    {
      id: 2,
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint rem eum. Distinctio odit aut in libero! Ducimus quia maxime quasi ratione, expedita dolore libero nam, ullam maiores, vitae enim recusandae. Aliquid debitis fugit ea dolorum molestiae commodi, ratione esse, veniam dolores recusandae, consequatur veritatis nemo. Placeat aliquam odit beatae.',
      user: 'Mia'
    },
    {
      id: 3,
      text: 'Sup.😄',
      user: 'klendi',
      isUser: true
    },
    {
      id: 4,
      text: 'Yes',
      user: 'Mia'
    }
  ]
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
