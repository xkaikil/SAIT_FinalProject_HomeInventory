import { reloadResources } from 'i18next';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Account extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    try {
      let user = JSON.parse(localStorage.getItem('user'));


      return (
        <div>
          <h1>Account-View:</h1>
          <h1>User: {user.name}</h1>
          <h1>ID: {user.id}</h1>
        </div>
      )

    } catch (err) {
      console.log(err)
      return (
        <h1>Please login</h1>
      )
    }
  }
}

export default Account;