import React from 'react';
import './App.css'; // Import external CSS
import Header from './components/Header';
import Body from './components/Body';
import End from './components/End';

function App() {
  return (
    <>
      <Header className="blured" />
      <Body />
      <End />
    </>
  );
}

export default App;
