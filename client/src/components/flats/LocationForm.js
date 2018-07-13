import React, { Component } from "react";
import "../Profile.css";

class Location extends Component {
  state = {
    address: this.props.flat.address || ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { flat } = this.props;

    return (
      <form className="form-group">
        <label>What is your address?</label>
        <input
          className="form-control"
          value={this.state.address}
          name="address"
          onChange={this.handleChange}
        />

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-normal"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Location;
