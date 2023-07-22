import React from 'react'
import './Sidebar.css'
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src='#'/>
        </div>
        <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon className='icons'/>
            </IconButton>
            <IconButton>
              <ChatIcon className='icons'/>
            </IconButton>
            <IconButton>
              <MoreVertIcon className='icons'/>
            </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="search__inside">
          <SearchIcon className='icons'/>
          <input type="text" placeholder='Search here' id='search_box' />
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar