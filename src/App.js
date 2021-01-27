import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Posts from "./components/Posts";
import ChatBar from "./components/ChatBar";
import ChatBox from "./components/ChatBox"
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="facebook"> 
          <Sidebar/>
          <Posts />        
          <ChatBar />
          <ChatBox/>
      </div>
    </div>
  );
}

export default App;
