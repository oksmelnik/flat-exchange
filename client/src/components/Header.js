import React, { Component } from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Flat eXchange</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/logout">
            Log Out
          </NavItem>
          <NavItem eventKey={1} href="/rooms">
            My listings
          </NavItem>
          <NavItem eventKey={2} href="/">
            Profile
          </NavItem>
          <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="/new">
              Add flat
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Edit profile</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
