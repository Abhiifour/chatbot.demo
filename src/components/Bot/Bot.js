import React from 'react';
import './Bot.scss';
import bot from './bot.png'

function Bot() {
  return (
    <div className="bot-main">
        <div className="box">
          <div className="icon">
            <div className="img-box">
                <img src={bot} alt="" />
            </div>
          </div>
           <div className="bot-text"> <p>Hello, Welcome to student info system!</p></div>
        </div>
    </div>
  )
}

export default Bot