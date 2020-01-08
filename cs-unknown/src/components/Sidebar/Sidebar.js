import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import TopSB from './TopSB.js';
import MiddleSB from './MiddleSB.js';
import BottomSB from './BottomSB.js';

const Sidebar = () => {

  return (
    <div className='sidebar-container'>
      <TopSB />
      <MiddleSB />
      <BottomSB />
    </div>
  )
}

export default Sidebar;