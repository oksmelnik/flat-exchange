import React, { Component } from 'react';
import { Image, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect, Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import FlatForm from './FlatForm'
import { addFlat } from '../../actions/flats'

class FlatPage extends Component {

  addFlat = (flat) => {
    console.log(flat)
    const userId = this.props.user.id
     this.props.addFlat(flat, userId)
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
            Create your flat
            </div>
            <FlatForm onSubmit={this.addFlat}/>
            </div>
          </div>
        </div>
      </div>
    )}}

const mapStateToProps = state => ({
    user: state.user === null ? null : state.user.user
  })

export default connect(mapStateToProps, {
  addFlat
})(FlatPage)
