import React from 'react';
import './Slot.scss';
import Button from '../Button/Button';
import Date from './Date';
import Time from './Time';

function Slot() {
  return (
    <div className="slot-main">
        <div className="box-box">
            
       <div className="data">
       <Date/>
         <Date/>
         <Date/>
       </div>

        </div>
        <div className="box-box">
           <div className="head">MORNING</div>
          <div className="data">
          <Time/>
           <Time/>
           <Time/>
           <Time/>
          </div>
        </div>
        <div className="box-box">
           <div className="head">NOON</div>
           <div className="data">
           <Time/>
           <Time/>
           <Time/>
           <Time/>
           </div>
          

        </div>

    </div>
  )
}

export default Slot