import './App.css'
import Sidebar from './Sidebar'
import Chatbox from './Chatbox'
import React,{ useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync').then((response)=>{
      
      setMessages(response.data);
    })
  },[]);

  useEffect(()=>{
    const pusher = new Pusher('4ebb270869f61f45d3b7', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);
  console.log(messages);
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar/>
        <Chatbox/>
      </div>
    </div>
  );
}

export default App;
