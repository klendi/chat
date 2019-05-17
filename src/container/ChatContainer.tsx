import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MessageComponent from '../components/MessageComponent'
import InputField from '../components/InputField'
import Notification from '../components/Notification'
import { connect } from 'react-redux'

interface IProps {
  users?: [string]
  messages: [Object]
}

class DefaultLayout extends React.Component<IProps> {
  scrollToMyRef = () => window.scrollTo(0, 800000000)

  componentDidMount() {
    this.scrollToMyRef()
  }

  render() {
    return (
      <div>
        <div className="top-bar">
          <Container className="top-bar-users">
            <Row style={{ justifyContent: 'space-between' }}>
              <div>Online: {this.props.users.map(user => user + ', ')}</div>
              <div>Klendi</div>
            </Row>
          </Container>
        </div>
        <Container className="messages-container">
          <Row>
            {this.props.messages.map((message: any) => {
              return (
                <MessageComponent
                  text={message.text}
                  key={message.id}
                  user={message.user}
                  isUser={message.isUser}
                />
              )
            })}
            <Notification />
          </Row>
        </Container>
        <InputField />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    messages: state.MessagesReducer.messages,
    users: state.PresenceReducer.users
  }
}

const mapDispatchToProps = {
  sendMessage: (dispatch: any) => {}
}

export default connect(mapStateToProps)(DefaultLayout)
