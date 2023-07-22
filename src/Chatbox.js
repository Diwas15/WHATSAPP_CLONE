import React from 'react'
import './Chatbox.css'
import {Avatar,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { DisplaySettings } from '@mui/icons-material';
function Chatbox() {
  return (
    <div className='chatbox'>
      <div className="chatbox__header">
        <Avatar className='avatar'/>
        <div className="chat__header__info">
          <h5>Diwas Sati</h5>
          <p>last seen date and time</p>
        </div>
        <div className="chat__header__icons">
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className='chat__message'>
          <span className="chat__name">Diwas Sati</span>
          hello how are you?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__receiver'>
          <span className="chat__name">Diwas Sati</span>
          hello how are you?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className="chat__name">Diwas Sati</span>
          hello how are you?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton >
          <SentimentSatisfiedAltIcon className='chat__icons'/>
        </IconButton>
        <form className='input__form'>
          <input type="text" className="chat__input" placeholder='Type your message here' />
          <button type='submit' className='send '><SendIcon className='chat__icons '/></button>
        </form>
        <IconButton>
          <MicIcon className='chat__icons mic'/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chatbox