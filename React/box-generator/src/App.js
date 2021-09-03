import React, { useState } from  'react';
import './App.css';
import Form from './components/form';

function App() {
  const [currentBox, setCurrentBox]= useState([]);
  const newBox = (box) => {
    setCurrentBox([...currentBox, box]);
  } 

  return (
    <div className="App">
      <Form onNewBox={newBox} boxes={currentBox}/>
    </div>
  );
}

export default App;
