import React from 'react';
import './Card.scss';
import {useNavigate} from 'react-router-dom';

function Card() {
  const navigate = useNavigate();
  return (
    <div className="card-main">
       <div className="card-box">
       <div className="content">
        Enter into Student Info System
        </div>
        <div className="button" onClick={()=> navigate("/chat")}>
        Enroll Now!
        </div>
       </div>

    </div>
  )
}

export default Card;