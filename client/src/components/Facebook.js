import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { createUser, fetchUser } from '../actions/users'
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'

class Facebook extends Component {
  state = {
    isLoggedIn: false
  };

  responseFacebook = response => {
    this.props.createUser(response)
    this.props.fetchUser(response.userID)

  }

  componentClicked = () => {
    console.log("click")
  }

  render() {
    let fbContent;
      const { user } = this.props

    if (user) {
      fbContent = (
        <div>
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={user.picture} alt={user.name} />
          <h2>Welcome {user.name}</h2>
          Email: {user.email}
        </div>
         </div>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="146628039382198"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>
  }
}
const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { createUser, fetchUser })(Facebook)
