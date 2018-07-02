import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Facebook from "./components/Facebook";
import Profile from "./components/Profile";
import { createBrowserHistory } from "history";
import LogoutPage from "./components/Logout";
import Sidebar from "./components/flats/Sidebar";
import FlatNew from "./components/flats/FlatNew";
import Index from "./components/flats/Index";
import Dashboard from "./components/flats/Dashboard";
import DescriptionPage from "./components/flats/DescriptionPage";
import PhotoUpload from "./components/flats/PhotoUpload";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import history from "./MyHistory";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        {
          <div>
            <Header />
            <Route exact path="/login" component={Facebook} />
            <Route exact path="/" component={Profile} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/new" component={FlatNew} />
            <Route exact path="/rooms" component={Index} />
            <Route exact path="/edit/:id" component={Sidebar} />
            <Route exact path="/:id/description" component={DescriptionPage} />

            <Route exact path="/:id/photo" component={PhotoUpload} />
            <Route exact path="/:id/listings" component={PhotoUpload} />
            <Route exact path="/:id/location" component={Location} />
          </div>
        }
      </ConnectedRouter>
    );
  }
}

export default App;
