import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MessageComponent from '../components/MessageComponent'
import InputField from '../components/InputField'
import Notification from '../components/Notification'
import { connect } from 'react-redux'
import { join, _sendMessage } from '../socket'
import shortid from 'shortid'
import { login } from '../actions'

interface IProps {
  users?: [IUser]
  messages: [Object]
  user?: IUser
  notifications?: [string]
}

interface IUser {
  name: string
  id: string
}

class DefaultLayout extends React.Component<IProps> {
  msgRef = React.createRef()

  componentDidMount() {
    const username = prompt('Please enter your username', '') || 'Anonymous'
    const id = shortid.generate()
    join({
      name: username,
      id
    })
    login(username, id)
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    //@ts-ignore
    this.msgRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  sendMsg = (msg: string) => {
    _sendMessage({
      author: this.props.user,
      id: 'da4654d6sa6',
      text: msg,
      type: 'message'
    })
    this.scrollToBottom()
  }

  render() {
    const { messages, users, user } = this.props
    return (
      <div>
        <div className="top-bar">
          <Container className="top-bar-users">
            <Row style={{ justifyContent: 'space-between' }}>
              <div>Online: {users.map(user => user.name + ', ')}</div>
              <div>{user.name}</div>
            </Row>
          </Container>
        </div>
        <Container className="messages-container">
          <Row>
            {/* 
              // @ts-ignore */}
            {messages.map(({ text, type, id, author }) => {
              if (type === 'notification') {
                return <Notification text={text} />
              } else {
                return <MessageComponent text={text} key={id} author={author} />
              }
            })}
            {/* 
            //@ts-ignore */}
            <div ref={this.msgRef} />
          </Row>
        </Container>
        <InputField onSendMessage={(msg: any) => this.sendMsg(msg)} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    messages: state.MessagesReducer.messages,
    users: state.PresenceReducer.users,
    user: state.PresenceReducer.user
  }
}

export default connect(mapStateToProps)(DefaultLayout)
