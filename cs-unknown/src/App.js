import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Registration from './components/Registration/Registration.js';
import Login from './components/Login/Login.js';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={props => <Registration />} />
          {/* <Sidebar /> */}
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
              />
            )}
          />
          <PrivateRoute
            exact
            path="/home"
            render={props => (
              <Sidebar
                {...props}
              />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
