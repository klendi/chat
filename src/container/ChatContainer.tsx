import React from 'react'
import { Container } from 'react-bootstrap'

const DefaultLayout: React.FC = props => {
  return (
    <div>
      <div className='top-bar'>
        <Container className='top-bar-users'>
          Online: Klendi, Kristi, Arsildo
        </Container>
      </div>
    </div>
  )
}

export default DefaultLayout
