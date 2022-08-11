import { reloadResources } from 'i18next';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Account extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    try {
      let user = JSON.parse(localStorage.getItem('user'));

      let roleString = `(${user.role})`



      return (
        <div className='accountNav'>
          <h1>Account Settings:</h1>
          <h1>User: {user.name} {roleString}</h1>

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