import React, { useState } from 'react'
import {} from 'react-bootstrap'

interface IProps {
  onSendMessage?: Function
  placeholder?: string
}

const InputField: React.FC<IProps> = props => {
  const [text, setText] = useState('')
  const onChange = (e: any) => {
    setText(e.target.value)
  }
  return (
    <div className="input-container">
      <input
        placeholder={props.placeholder}
        className="input-field"
        type="text"
        value={text}
        onChange={onChange}
      />
    </div>
  )
}

InputField.defaultProps = {
  placeholder: 'Send a Message'
}

export default InputField
