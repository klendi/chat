import React, { createRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import MessageComponent from '../components/MessageComponent'
import InputField from './../components/InputField'
import io from 'socket.io-client'

class DefaultLayout extends React.Component {
  scrollToMyRef = () => window.scrollTo(0, 8000000)

  componentDidMount() {
    this.scrollToMyRef()
  }

  render() {
    return (
      <div>
        <div className="top-bar">
          <Container className="top-bar-users">
            Online: Klendi, Kristi, Arsildo
          </Container>
        </div>
        <Container className="messages-container">
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent />
          <MessageComponent isUser />
        </Container>
        <InputField />
      </div>
    )
  }
}

export default DefaultLayout
