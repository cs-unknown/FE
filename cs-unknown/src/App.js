import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration.js';
import Login from './components/Login/Login.js';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';

function App(props) {
  console.log('props in app', props)
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route 
            exact path="/" 
            render={props => <Registration {...props} />} 
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} />}
          />
          <Route
            exact
            path="/home"
            render={props => <Main {...props} />}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
