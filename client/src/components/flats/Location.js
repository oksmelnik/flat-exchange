import React, { Component } from "react";
import { connect } from "react-redux";
import "../Profile.css";
import { Redirect } from "react-router-dom";

class Location extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/login" />;

    return (
      <div className="form-group">
        <label>What is your address?</label>
        <input
          className="form-control"
          name="accomodate"
          onChange={this.handleChange}
        />

        <div class="text-center">
          <button
            type="submit"
            className="btn btn-normal"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Location;
