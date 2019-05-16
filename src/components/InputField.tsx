import React, { Component } from 'react'
import {} from 'react-bootstrap'

export default class InputField extends Component {
  render() {
    return (
      <div className="input-container">
        <input
          placeholder="Send a Message"
          className="input-field"
          type="text"
        />
      </div>
    )
  }
}
