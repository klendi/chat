import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Chat from '../container/ChatContainer'
import JoinChat from '../container/JoinChat'

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={JoinChat} />
      <Route path="/:name" component={Chat} />
    </Switch>
  )
}

export default Router
