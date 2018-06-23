import React, { Component } from 'react';
import { Image, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from 'react-redux'
import './Profile.css'
import {Redirect, Link} from 'react-router-dom'

class Profile extends Component {
  render() {
    const {user} = this.props
    if (!user) return (
      <Redirect to="/login" />
    )
    console.log(user)


    return (
      <div className="container"
        style={{  }}>
        <div className="row">
          <div className="col-md-3">
            <Panel bsStyle="primary">
              <Panel.Heading>Verification</Panel.Heading>
              <Panel.Body>
                <ListGroup>
                    <ListGroupItem>Email Address {user.email}</ListGroupItem>
                    <ListGroupItem>Phone Number</ListGroupItem>
                    </ListGroup>
              </Panel.Body>
            </Panel>
            </div>
          <div className="col-md-1">
            <Image className="avatar-small" src={user.picture} rounded/>
              </div>
          <div className="col-ms-3">
            <h2>{user.name}</h2>
            </div>
          </div>
          </div>
      )}}

const mapStateToProps = state => ({
    user: state.user === null ? null : state.user.user
  }
)

export default connect(mapStateToProps, { })(Profile)
