import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

const JoinChat: React.FC = () => {
  const [text, setText] = useState('')

  const onSbm = (e: any) => {
    e.preventDefault()
    window.location.replace(window.location.href + text)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10rem'
      }}
    >
      <Card style={{ width: '28rem', justifyContent: 'center' }}>
        <Card.Body>
          <Card.Title>Welcome to this chat app</Card.Title>
          <Card.Text>
            You can open a room by just adding a slash to url and name of the
            room for eg <span style={{ color: 'blue' }}>chat.com/room1</span>
          </Card.Text>

          <Form onSubmit={onSbm}>
            <Form.Label>Room Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={text}
              //@ts-ignore
              onChange={e => setText(e.target.value)}
              placeholder="Enter room name"
            />
            <br />
            <Button variant="primary" type="submit">
              Join
            </Button>
          </Form>
          <br />
          <footer style={{ textAlign: 'center' }}>
            Created with ❤️ by{' '}
            <a target="_blank" href="https://klendi.me">
              Klendi Gocci
            </a>
          </footer>
        </Card.Body>
      </Card>
    </div>
  )
}

export default JoinChat
