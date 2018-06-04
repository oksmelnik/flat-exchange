import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { createUser, fetchUser } from '../actions/users'
import {connect} from 'react-redux'

class Facebook extends Component {
  state = {
    isLoggedIn: false
  };

  responseFacebook = response => {

    console.log(response)
  this.props.fetchUser(response.userID)
  

    this.setState({
      isLoggedIn: true
    })
  }

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
      const { user } = this.props

    if (this.state.isLoggedIn) {

      console.log(user)
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={user.picture} alt={user.name} />
          <h2>Welcome {user.name}</h2>
          Email: {user.email}
        </div>
      );
      console.log(this.state)
    } else {
      console.log("else")
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
