import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect} from 'react-router-dom'
import Sidebar from './Sidebar'


class Description extends Component {

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
      <div className='col-md-9'>
    <div className='panel'>
          <div className='panel-heading'>
            Description
            </div>
            <div className='panel-body'>
              <div className='container'>
                <div className='row'>
                <div className='col-md-4 select'>
                  <div className="form-group">
                  <label>Listing Name</label>
                      <input className="form-control" name='accomodate' onChange={this.handleChange}>

                        </input>
                      </div>
                    </div>

                    <label>Summary</label>
                        <input className="form-control" name='accomodate' onChange={this.handleChange}>

                          </input>


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

export default connect(mapStateToProps, { })(Description)
