import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import Textbox from './Textbox'

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <Textbox/>
      <p>inventory goes here</p>
      <p>button to display map of traversed endpoints goes here</p>
    </div>
  )
}

export default Sidebar;