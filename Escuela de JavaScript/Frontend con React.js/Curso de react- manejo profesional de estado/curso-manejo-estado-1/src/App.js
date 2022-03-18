import React from 'react';
import { UseState } from './UseState.js';
import { UseReducer } from './UseReducer.js'
import { ClassState } from './ClassState.js';
import './App.css';

function App( { name }) {
  return (
    <div className="App">
      <UseState name="Use State"/>
      <UseReducer name="Use Reducer"/>
      <ClassState name="Class State"/>
      
    </div>
  );
}

export default App;
