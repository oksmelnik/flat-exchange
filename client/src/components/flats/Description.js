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
      <div className='col-md-10'>
        <div className='panel panel-default'>
          <div className="panel-heading">
            Description
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
