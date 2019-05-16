import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
interface IProps {
  isUser?: boolean
}
const DefaultLayout: React.FC<IProps> = props => {
  if (props.isUser) {
    return (
      <div className="message-container-user">
        <div className="message-this-user msg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit
          possimus, modi eveniet voluptatem porro quae dolore soluta aperiam
          facilis vitae delectus non cupiditate ratione ut quisquam amet
          corrupti magnam esse harum placeat distinctio nam accusamus
          blanditiis. Libero quis dignissimos fugit eaque tenetur ipsa ab,
          possimus laboriosam quam. Nostrum, illo.
        </div>
      </div>
    )
  }
  return (
    <div className="message-container">
      <div className="message-user msg">Klendi</div>
      <div className="message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
        laboriosam eligendi. Est consequuntur deserunt obcaecati? Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Ut mollitia nisi esse unde
        facere. Ad similique dolorem repellendus iste nihil?
      </div>
    </div>
  )
}

export default DefaultLayout
