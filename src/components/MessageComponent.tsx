import React from 'react'
import classnames from 'classnames'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'

interface IProps {
  author?: IAuthor
  text: string
  currentUser?: IAuthor
}

interface IAuthor {
  name: string
  id: string
}

const MessageComponent: React.FC<IProps> = props => {
  const isUser = props.author.id === props.currentUser.id
  const cl1 = classnames(
    isUser ? 'message-container-user' : 'message-container'
  )
  const cl2 = classnames(isUser ? 'message-this-user' : 'message', 'ms')
  const cl3 = classnames(!isUser ? 'msg-text' : 'msg-text-user')
  return (
    <Col md={12} xl={12} className={cl1}>
      <div className={cl2}>
        {!isUser ? <span className="msg-user">{props.author.name}</span> : null}
        <div className={cl3}>{props.text}</div>
      </div>
    </Col>
  )
}

const mapStateToProps = (state: any) => ({
  currentUser: state.PresenceReducer.user
})

export default connect(mapStateToProps)(MessageComponent)
