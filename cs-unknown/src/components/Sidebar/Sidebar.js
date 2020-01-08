import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <p>Game Text, events, chat goes here</p>
      <p>inventory goes here</p>
      <p>button to display map of traversed endpoints goes here</p>
    </div>
  )
}

export default Sidebar;