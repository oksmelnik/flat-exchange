import React, { Component } from "react";
import "../Profile.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { flat } = this.props;

    return (
      <div>
        <ul>
          <li className="sidebar-item" name="dvhsnd">
            <Link to="./description">Description</Link>
          </li>

          <li className="sidebar-item" name="dvhsnd">
            <Link to="./dashboard">Dashboard</Link>
          </li>

          <li className="sidebar-item" href="#">
            <Link to="./location">Location</Link>
          </li>

          <li className="sidebar-item">
            <Link to="./photo">Photo</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Sidebar;
