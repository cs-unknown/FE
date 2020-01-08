import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Registration from './components/Registration/Registration.js'
import Login from './components/Login/Login.js'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js'
import Viewport from './components/Viewport/Viewport'

function App(props) {
  console.log('props in app', props)
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
          <Route exact path='/' render={props => <Registration {...props} />} />
          <Route exact path='/login' render={props => <Login {...props} />} />
          <Route exact path='/home' render={props => <Sidebar {...props} />} />
        </Switch>
      </header>
    </div>
  )
}

export default App
