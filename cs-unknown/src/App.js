import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Registration from './components/Registration/Registration.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Sidebar /> */}
        <Registration />
      </header>
    </div>
  );
}

export default App;
