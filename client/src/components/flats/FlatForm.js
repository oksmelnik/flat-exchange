import React, { Component } from 'react'
import '../Profile.css'

class FlatForm extends Component {
  state = {}

  handleSubmit = (e) => {
    this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
      const {name, value} = event.target

      this.setState({
        [name]: value
        })
      }

  render() {
    return (
      <div className='panel-body'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-4 select'>
              <form className="form-group">
                <label>Home Type</label>
                  <select className="form-control" name='home_type' onChange={this.handleChange}>
                    <option value="" selected>Choose here</option>
                    <option value="Appartment">Appartment</option>
                    <option value="House">House</option>
                    <option value="Bed&Breakfast">Bed&Breakfast</option>
                    </select>
                  </form>
                </div>

              <div className='col-md-4 select'>
                <div className="form-group">
                  <label>Room Type</label>
                    <select className="form-control" name='room_type' onChange={this.handleChange}>
                      <option value="" selected>Choose here</option>
                      <option value="Entire">Entire</option>
                      <option value="Shared">Shared</option>
                      </select>
                    </div>
                  </div>

              <div className='col-md-4 select'>
                <div className="form-group">
                  <label>Accomodate</label>
                      <select className="form-control" name='accomodate' onChange={this.handleChange}>
                        <option value="" selected>Choose here</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div class="text-center">

                      <button
                        type="submit"
                        className="btn btn-normal"
                        onClick={this.handleSubmit}>
                        Submit
                      </button>
                    </div>
                </div>
            </div>
          </div>
        )}}

  export default FlatForm;
