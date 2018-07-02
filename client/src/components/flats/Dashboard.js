import React, { Component } from "react";
import { Image, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect, Link, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import { fetchFlat, updateFlat } from "../../actions/flats";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>

          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
