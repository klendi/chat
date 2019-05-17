import React from 'react'
import { Col } from 'react-bootstrap'

interface IProps {
  isUser?: boolean
}

const Notification: React.FC<IProps> = props => {
  return (
    <Col md={12} xl={12} xs={12} className="notification-container">
      <div className="notification">Ricardo Milos has joined the chat</div>
    </Col>
  )
}

export default Notification
