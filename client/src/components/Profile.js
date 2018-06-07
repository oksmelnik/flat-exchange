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
      <div className="row">
        <div className="col-md-3">
          <div className="center">
          <Image src={user.picture} rounded/>
          </div>
          <Panel bsStyle="primary">
            <Panel.Heading>
      Verification
      </Panel.Heading>
            <Panel.Body>
              <ListGroup>
                  <ListGroupItem>Email Address {user.email}</ListGroupItem>
                  <ListGroupItem>Phone Number</ListGroupItem>
                  </ListGroup>
            </Panel.Body>
          </Panel>
        </div>

        <div className="col-md-9">
          <h2>{user.name}</h2>

        </div>
      </div>

      )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, { })(Profile)
