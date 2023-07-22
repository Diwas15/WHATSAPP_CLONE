import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@mui/material'
function SidebarChat() {
  return (
    <div className='SidebarChat'>
        <Avatar/>
        <div className="sidebarChat__info">
            <h4>Diwas Sati</h4>
            <p>this is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat