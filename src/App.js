import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Signin'
import Title from './Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
       <Signin />
      </div>
    );
  }
}

export default App;
