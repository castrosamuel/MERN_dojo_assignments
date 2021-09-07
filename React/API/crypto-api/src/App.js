import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import RegularSort from './components/RegularSort';
import AxiosSort from './components/AxiosSort';
function App() {

  

  return (
    <div className="App">
      {/* <RegularSort></RegularSort> */}
      <AxiosSort></AxiosSort>
    </div>
  );
}

export default App;
