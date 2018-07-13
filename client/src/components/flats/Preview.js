import React, { Component } from "react";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import { fetchFlat, updateFlat } from "../../actions/flats";
import Notifications, { success } from "react-notification-system-redux";

class Preview extends Component {
  buttonValue = () => {
    const { flat } = this.props;
    if (flat.is_active === false) return "Publish";
    else return "Hide";
  };

  handlePublish = () => {
    const { flat } = this.props;
    this.props.updateFlat(
      { is_active: flat.is_active === true ? false : true },
      this.props.match.params.id
    );
  };

  renderActive = () => {
    const { flat } = this.props;
    if (flat.is_active) return "Published";
    else return "Not published";
  };

  render() {
    const { flat, user, notifications } = this.props;

    if (!flat) return <Redirect to="./description" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
            <button
              className="btn btn-normal btn-block"
              onClick={this.handlePublish}
            >
              {this.buttonValue()}
            </button>
          </div>

          <div className="col-md-10">
            <div className="panel">
              <div className="panel-heading">Preview</div>

              <div className="panel-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <img src="/R21.jpg" className="photoP" />
                    </div>
                    <div className="col-md-7">
                      <h4>
                        {flat.id} {flat.name}
                      </h4>
                      <h4>
                        {flat.home_type} {flat.room_type} Accomodate:{" "}
                        {flat.room_type}
                      </h4>
                      <h4>
                        Address{flat.address} Active: {this.renderActive()}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user === null ? null : state.user.user,
  flat: state.flat === null ? null : state.flat,
  notifications: state.notifications
});

export default connect(
  mapStateToProps,
  { updateFlat, success }
)(Preview);
