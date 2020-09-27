import React from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import VideoBox from './components/VideoBox';

//import TestUI from './components/TestUI'

function App() {
  return (
    <div className="" >
      <NavBar logo="./images/logo.png"></NavBar>
      <VideoBox></VideoBox>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
