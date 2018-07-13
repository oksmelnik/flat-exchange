import React, { Component } from "react";
import "../Profile.css";

class Description extends Component {
  state = {
    name: this.props.flat.name || "",
    summary: this.props.flat.summary || ""
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
        <label>Listing Name</label>
        <input
          className="form-control"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />

        <label>Summary</label>
        <input
          className="form-control"
          value={this.state.summary}
          name="summary"
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

export default Description;
