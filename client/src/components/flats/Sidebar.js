import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (

            <ul>
            <li className="sidebar-item">
                <Link to="./dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="sidebar-item" href="#">
                <Link to="./listings">
                  Listings
                </Link>
              </li>

              <li className="sidebar-item" >
                  <Link to="./description">
                  Description
                  </Link>
                </li>

              <li className="sidebar-item" href="#">
                <Link to="./photo">
                  Photos
                  </Link>
                </li>

                <li className="sidebar-item" href="#">
                  <Link to="./location">
                  Location
                  </Link>
                  </li>
              </ul>

            )}}
export default Sidebar;
