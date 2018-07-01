import React, { Component } from 'react';
import '../Profile.css'
import {Link} from 'react-router-dom'


class SidebarMain extends Component {

  render() {
   return (
     <div>
      <ul>
        <li className="sidebar-item">
          <Link to="./rooms">
            Listings
          </Link>
        </li>

        <li className="sidebar-item" href="#">
          <Link to="./reservations">
            Reservations
          </Link>
        </li>

        <li className="sidebar-item" name="dvhsnd">
          <Link to="./trips">
          Description
          </Link>
        </li>
      </ul>
      <hr/>
    </div>
)}}

export default SidebarMain
