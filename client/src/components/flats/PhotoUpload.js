import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect} from 'react-router-dom'
import Sidebar from './Sidebar'


class PhotoUpload extends Component {

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
        <div className='panel panel-default'>
          <div className="panel-heading">
            Photo Upload
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

export default connect(mapStateToProps, { })(PhotoUpload)
