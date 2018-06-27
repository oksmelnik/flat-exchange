import React, { Component } from 'react';
import { Image, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect, Link, withRouter} from 'react-router-dom'
import Sidebar from './Sidebar'
import { addFlat } from '../../actions/flats'

class Dashboard extends Component {

  componentWillMount(props) {
  this.props.fetchFlat(this.props.match.params.id)
}

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
            Dashboard
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

export default connect(mapStateToProps, { })(Dashboard)