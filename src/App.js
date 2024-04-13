import {Route,Routes} from 'react-router-dom'
import './App.css';
import Chat from './Pages/Chat/Chat';
import Exit from './Pages/Exit/Exit';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';

import ChatBot from './chat-bot/Chat';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat' element={<ChatBot/>}/>
      <Route path='/exit' element={<Exit/>}/>
    </Routes>
    </div>
  );
}

export default App;
