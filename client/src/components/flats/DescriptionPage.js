import Sidebar from "./Sidebar";
import Description from "./DescriptionForm";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect } from "react-router-dom";
import Notifications, { success } from "react-notification-system-redux";
import { fetchFlat, updateFlat } from "../../actions/flats";

class DescriptionPage extends Component {
  componentWillMount() {
    this.props.fetchFlat(this.props.match.params.id);
  }

  flatUpdate = update => {
    this.props.updateFlat(update, this.props.match.params.id);
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

function mapStateToProps(state, ownProps) {
  let flatN = {};
  if (state.flat === null) flatN = null;
  else {
    if (state.flat.id) {
      flatN = state.flat;
    } else {
      flatN = state.flat.find(item => item.id == ownProps.match.params.id);
    }
  }

  return {
    user: state.user === null ? null : state.user.user,
    flat: flatN,
    notifications: state.notifications
  };
}

export default connect(
  mapStateToProps,
  { fetchFlat, updateFlat, success }
)(DescriptionPage);
