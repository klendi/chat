import React from 'react'
import classnames from 'classnames'
import { Col } from 'react-bootstrap'

interface IProps {
  isUser: boolean
  user?: string
  text: string
}

const MessageComponent: React.FC<IProps> = props => {
  const cl1 = classnames(
    props.isUser ? 'message-container-user' : 'message-container'
  )
  const cl2 = classnames(props.isUser ? 'message-this-user' : 'message', 'ms')
  const cl3 = classnames(!props.isUser ? 'msg-text' : 'msg-text-user')
  return (
    <Col md={12} xl={12} className={cl1}>
      <div className={cl2}>
        {!props.isUser ? <span className="msg-user">{props.user}</span> : null}
        <div className={cl3}>{props.text}</div>
      </div>
    </Col>
  )
}

export default MessageComponent
