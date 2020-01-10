import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import Textbox from './Textbox'
import './Sidebar.css'
import MapModal from '../MapModal/MapModal'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Textbox />
    </div>
  )
}

export default Sidebar
