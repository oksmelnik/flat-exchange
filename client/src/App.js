import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Facebook from "./components/Facebook";
import Profile from "./components/Profile";
import LogoutPage from "./components/Logout";
import FlatNew from "./components/flats/FlatNew";
import Index from "./components/flats/Index";
import LocationPage from "./components/flats/LocationPage";
import Preview from "./components/flats/Preview";
import DescriptionPage from "./components/flats/DescriptionPage";
import PhotoUpload from "./components/flats/PhotoUpload";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
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
            <Route
              exact
              path="/edit/:id/description"
              component={DescriptionPage}
            />
            <Route exact path="/edit/:id/photo" component={PhotoUpload} />
            <Route exact path="/edit/:id/location" component={LocationPage} />
            <Route exact path="/edit/:id/preview" component={Preview} />
          </div>
        }
      </ConnectedRouter>
    );
  }
}

export default App;
