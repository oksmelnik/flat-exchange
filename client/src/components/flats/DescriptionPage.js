import Sidebar from "./Sidebar";
import Description from "./DescriptionForm";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect } from "react-router-dom";
import Notifications, { success } from "react-notification-system-redux";
import { fetchFlat, updateFlat } from "../../actions/flats";

class LocationPage extends Component {
  componentWillMount() {
    this.props.fetchFlat(this.props.match.params.id);
  }

  renderButton = flat => {
    if (flat.is_active === null)
      return (
        <button
          className="btn btn-normal btn-block"
          onClick={this.handlePublish}
        >
          Publish
        </button>
      );
  };

  flatUpdate = update => {
    this.props.updateFlat(update, this.props.match.params.id);
  };

  handlePublish = () => {
    this.props.updateFlat({ is_active: true }, this.props.match.params.id);
  };

  render() {
    const { flat, user, notifications } = this.props;
    if (!user) return <Redirect to="/login" />;
    if (flat === null) return null;

    return (
      <div className="container">
        <Notifications notifications={notifications} />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
            {this.renderButton(flat)}
          </div>

          <div className="col-md-9">
            <div className="panel">
              <div className="panel-heading">Description</div>
              <div className="panel-body">
                <div className="container">
                  <div className="row">
                    <Description
                      onSubmit={this.flatUpdate}
                      flat={this.props.flat}
                    />
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
  { fetchFlat, updateFlat, success }
)(LocationPage);
