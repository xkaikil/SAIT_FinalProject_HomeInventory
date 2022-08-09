
import React, { Component } from 'react'

export class Logout extends Component {

componentDidMount(){
    window.location.reload(false);
}
  render() {
    return (
        <h1>You are logged out</h1>
    )
  }
}

export default Logout;
