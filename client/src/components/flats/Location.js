import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect} from 'react-router-dom'
import Sidebar from './Sidebar'


class Location extends Component {

  render() {
    const {user} = this.props
    if (!user) return (
      <Redirect to="/login" />
      )

    return (
      <div className='container'>
      <div className='row'>
      <div className='col-md-2'>
        <Sidebar/>
        </div>
      <div className='col-md-10'>
        <div className='panel'>
          <div className="panel-heading">
            Location
            </div>
            <div className='panel-body'>
              <div className='container'>
                <div className='row'>
                <div className='col-md-4'>
                  <div className="form-group">
                    <label>What is your address?</label>
                        <input className="form-control" name='accomodate' onChange={this.handleChange}>

                          </input>
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
        </div>
      </div>
     </div>
    </div>
  )}}

const mapStateToProps = state => ({
    user: state.user === null ? null : state.user.user
  }
)

export default connect(mapStateToProps, { })(Location)
