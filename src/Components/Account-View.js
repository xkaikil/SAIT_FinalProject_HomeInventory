import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Account extends Component {

    componentDidMount(){
        window.location.reload();
    }
  render() {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
      <div>Account-View:
        <h1>User: {user.name}</h1>
        <h1>IS: {user.id}</h1>
      </div>
    )
  }
}

export default Account;