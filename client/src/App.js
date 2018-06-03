import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Facebook from './components/Facebook'



class App extends Component {


  render() {


    return (
      <div className="App">
      <Header className='Header'/>
      <Facebook />

  </div>
    );
  }
}

export default App;
