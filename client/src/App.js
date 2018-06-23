import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Facebook from './components/Facebook'
import Profile from './components/Profile'
import LogoutPage from './components/Logout'
import FlatPage from './components/FlatPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/login" component={Facebook} />
          <Route exact path="/" component={Profile} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/myflat" component={FlatPage} />
        </div>
      </Router>
    )
  }
}

export default App;
