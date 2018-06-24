import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (

            <ul>
            <li className="sidebar-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>

              <li className="sidebar-item" href="#">
                <a className="nav-link" href="#">
                  Listings
                </a>
              </li>

              <li className="sidebar-item" href="#">
                  <a className="nav-link" href="#">
                  Description
                   </a>
                </li>

              <li className="sidebar-item" href="#">
               <a className="nav-link" href="#">
                Photos
                </a>
                </li>

                <li className="sidebar-item" href="#">
                 <a className="nav-link" href="#">
                  Location
                  </a>
                  </li>
              </ul>

            )}}
export default Sidebar;
