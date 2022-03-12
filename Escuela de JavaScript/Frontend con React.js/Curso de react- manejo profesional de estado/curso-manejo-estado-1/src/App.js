import React from 'react';
import { UseState } from './UseState.js';
import { ClassState } from './ClassState.js'
import './App.css';

function App( { name }) {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
      
    </div>
  );
}

export default App;