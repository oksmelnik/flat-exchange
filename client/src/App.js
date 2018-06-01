import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header className='Header'/>
      </div>
    );
  }
}

export default App;
