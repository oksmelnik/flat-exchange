import Dashboard from "./Dashboard";
import React, { Component } from "react";
import { Image, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect, Link, withRouter } from "react-router-dom";

import { fetchFlat, updateFlat } from "../../actions/flats";

class Sidebar extends Component {
  componentWillMount(props) {
    this.props.fetchFlat(this.props.match.params.id);
  }

  // generalize render method later
  renderDescription = () => {
    const flat = this.props.flat || null;

    if (flat) {
      console.log(flat.name);
      if (flat.name) return "fa fa-check";
    }
  };

  handlePublish = () => {
    updateFlat({ is_active: true }, 1);
  };

  //one method to render of elements of the list

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <ul>
              <li className="sidebar-item">
                <Link to="./dashboard">Dashboard</Link>
                <span className="pull-right">
                  <i className="fa fa-check" />
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

              <li className="sidebar-item" href="#">
                <Link to="./photo">Photos</Link>
              </li>

              <li className="sidebar-item" href="#">
                <Link to="./location">Location</Link>
              </li>
            </ul>
            <hr />

            <button
              className="btn btn-normal btn-block"
              onClick={this.handlePublish()}
            >
              Publish
            </button>
          </div>

          <Dashboard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user === null ? null : state.user.user,
  flat: state.flat === null ? null : state.flat
});

export default connect(
  mapStateToProps,
  { fetchFlat, updateFlat }
)(Sidebar);
