import React from 'react';
import './Header.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import happyever from './happyever.svg';
import {useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
  <div className="header">
    <div className="header-main">
        <div className="logo" onClick={()=>navigate('/')}>
            <div className="img-out">
                <img src={happyever} alt="logo" />
            </div>
        </div>
        <div className="icon">
          <div className="icon-box">
            <RxHamburgerMenu/>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Header