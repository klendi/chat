import React, { useState } from 'react'

interface IProps {
  onSendMessage?: Function
  placeholder?: string
}

const InputField: React.FC<IProps> = props => {
  const [text, setText] = useState('')

  const onChange = (e: any) => {
    setText(e.target.value)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (props.onSendMessage !== undefined && text !== '')
      props.onSendMessage(text)

    setText('')
  }

  return (
    <form onSubmit={onSubmit} className="input-container">
      <input
        placeholder={props.placeholder}
        className="input-field"
        type="text"
        value={text}
        autoFocus
        onChange={onChange}
      />
    </form>
  )
}

InputField.defaultProps = {
  placeholder: 'Send a Message'
}

export default InputField
