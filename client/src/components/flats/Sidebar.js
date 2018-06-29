import React, { Component } from 'react'
import '../Profile.css'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Sidebar extends Component {

// generalize render method later
  renderDescription = () => {
    const flat = this.props.flat || null
    if (flat)
    if (flat.name) return "fa fa-check"
  }

  render() {

    return (

            <ul>
            <li className="sidebar-item">
                <Link to="./dashboard">
                  Dashboard
                </Link>
                <span className="pull-right"><i className="fa fa-check"></i></span>
              </li>

              <li className="sidebar-item" href="#">
                <Link to="./listings">
                  Listings
                </Link>
              </li>

              <li className="sidebar-item" name="dvhsnd">
                  <Link to="./description">
                  Description
                  </Link>
                  <span className='pull-right'><i className={this.renderDescription()}></i></span>
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
