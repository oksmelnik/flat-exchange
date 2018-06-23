import React, { Component } from 'react';
import { Image, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from 'react-redux'
import './Profile.css'
import {Redirect, Link} from 'react-router-dom'
import Sidebar from './Sidebar'

class Profile extends Component {
  render() {
    const {user} = this.props
    if (!user) return (
      <Redirect to="/login" />
    )
    console.log(user)


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
          <div className='panel-body'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4 select'>
                  <div className="form-group">
                    <label>Home Type</label>
                      <select className="form-control">
                        <option value="Appartment">Appartment</option>
                        <option value="House">House</option>
                        <option value="Bed&Breakfast">Bed&Breakfast</option>
                        </select>
                      </div>
                    </div>
                  <div className='col-md-4 select'>
                    <div className="form-group">
                      <label>Room Type</label>
                        <select className="form-control">
                          <option value="Entire">Entire</option>
                          <option value="Shared">Shared</option>
                          </select>
                        </div>
                      </div>
                  <div className='col-md-4 select'>
                    <div className="form-group">
                      <label>Accomodate</label>
                          <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                    <button type="submit" className="btn btn-normal">Submit</button>
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

export default connect(mapStateToProps, { })(Profile)
