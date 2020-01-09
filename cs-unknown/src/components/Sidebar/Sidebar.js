import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import TopSB from './TopSB.js';
import MiddleSB from './MiddleSB.js';
import BottomSB from './BottomSB.js';
import Textbox from './Textbox'

const Sidebar = () => {

  return (
    <div className="sidebar-container">
      <Textbox />
      <TopSB />
      {/* <MiddleSB /> */}
      <BottomSB />
    </div>
  );
}

export default Sidebar;