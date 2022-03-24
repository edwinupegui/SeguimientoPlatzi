import React from 'react';
import Header from './components/header/Header';
import Characters from './components/characters/Characters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
