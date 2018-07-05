import React, { Component } from "react";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect, Link, withRouter } from "react-router-dom";

import { fetchFlat, updateFlat } from "../../actions/flats";

class Sidebar extends Component {
  render() {
    const { flat } = this.props;
    return (
      <div>
        <ul>
          <li className="sidebar-item">
            <Link to="./dashboard">Dashboard</Link>
            <span className="pull-right">
              <i
                className={() => {
                  if (flat.name) "fa fa-check";
                }}
              />
            </span>
          </li>

          <li className="sidebar-item" href="#">
            <Link to="./listings">Listings</Link>
          </li>

          <li className="sidebar-item" name="dvhsnd">
            <Link to="./description">Description</Link>
            <span className="pull-right">
              <i className="fa fa-check" />
            </span>
          </li>

          <li className="sidebar-item">
            <Link to="./dashboard">Dashboard</Link>
            <span className="pull-right">
              <i
                className={() => {
                  if (flat.name) "fa fa-check";
                }}
              />
            </span>
          </li>

          <li className="sidebar-item">
            <Link to="./dashboard">Dashboard</Link>
            <span className="pull-right">
              <i
                className={() => {
                  if (flat.name) "fa fa-check";
                }}
              />
            </span>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Sidebar;
