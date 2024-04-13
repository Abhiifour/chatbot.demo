import React from 'react';
import Chatbot from 'react-simple-chatbot';
import './chat.css'
import { ThemeProvider } from 'styled-components';
import  { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Chat() {
  const [ isTrue,setTrue] = useState(false)
  const navigate = useNavigate()
  const steps = [
    {
      id:'greet',
      message:'Hello, Welcome to student info system!',
      trigger:'name'
    },
    {
      id:'name',
      options:[
        {value:'Got it',label:'Got it',trigger:'Name'}
      ],
      
    },
    {
      id:'Name',
      message:'Enter your Name',
      trigger:'wait'
    },
    {
      id:'wait',
      user:true,
      trigger:'age'
    },
    {
      id:'age',
      message:'Enter your Age',
      trigger:'wait2',
     
    },
    {
      id:'wait2',
      user:true,
      trigger:'pick a slot',
      
 
    },
    {
      id:'pick a slot',
      message:'Pick a slot!',
      trigger:'timing'
    },
    
    {
      id:'timing',
      options:[
        {value:'15 OCT',label:'15 OCT',trigger:'time'},
        {value:'16 OCT',label:'16 OCT',trigger:'time'},
        {value:'17 OCT',label:'17 OCT',trigger:'time'}

      ],
      
    },
    {
      id:'time',
      options:[
        {value:'morning',label:'Morning',trigger:'morning'},
        {value:'noon',label:'Noon',trigger:'noon'},
        {value:'evening',label:'Evening',trigger:'evening'}

      ],
    },
    {
      id:'morning',
      options:[
        {value:'9:00',label:'9:00',trigger:'end'},
        {value:'10:00',label:'10:00',trigger:'end'},
        {value:'11:00',label:'11:00',trigger:'end'}

      ],
    },
    {
      id:'noon',
      options:[
        {value:'12:00',label:'12:00',trigger:'end'},
        {value:'1:00',label:'1:00',trigger:'end'},
        {value:'2:00',label:'2:00',trigger:'end'}

      ],
    },
    {
      id:'evening',
      options:[
        {value:'3:00',label:'3:00',trigger:'end'},
        {value:'4:00',label:'4:00',trigger:'end'},
        {value:'5:00',label:'5:00',trigger:'end'}

      ],
    },
    {
      id:'end',
      message:'Thank you..',
      end:true,
      
    }
 
  ]  
 
  const theme = {
    
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#88D9FB',
    headerFontColor: '#88D9FB',
    headerFontSize: '15px',
    botBubbleColor: '#1A89B7',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
 
  
  return (
   <div className='chat-main'>
    <ThemeProvider theme={theme}>
    <Chatbot steps={steps} 
       headerTitle="Happily Ever"
    />
  </ThemeProvider>
  <div className="button" onClick={()=> navigate('/exit')}>
    Exit
  </div>
   </div>
  )
}

export default Chat;