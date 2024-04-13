import React from 'react';
import './User.scss';
import user from './user.png'

function User() {
  return (
   <div className="user-main">
    <div className="box">
      <p> Got it!</p>
    </div>
    <div className="icon">
            <div className="img-box">
                <img src={user} alt="user" />
            </div>
      </div>
   </div>
  )
}

export default User