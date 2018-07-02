import React, { Component } from "react";
import "../Profile.css";

class Description extends Component {
  state = {};

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
    return (
      <div className="panel">
        <div className="panel-heading">Description</div>
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <form className="form-group">
                <label>Listing Name</label>
                <input
                  className="form-control"
                  value={this.state.value}
                  name="name"
                  onChange={this.handleChange}
                />

                <label>Summary</label>
                <input
                  className="form-control"
                  value={this.state.value}
                  name="summary"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
