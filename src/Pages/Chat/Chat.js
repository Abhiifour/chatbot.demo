import React from 'react';
import './Chat.scss'
import Bot from '../../components/Bot/Bot';
import User from '../../components/User/User';

import Slot from '../../components/Slot/Slot';

function Chat() {
  return (
   <div className="chat-main">
    <Bot/>
    <User/>
    <User/>
    <Slot/>
   </div>
  )
}

export default Chat