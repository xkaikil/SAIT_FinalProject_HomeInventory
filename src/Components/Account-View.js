import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Account extends Component {

    componentDidMount(){
        window.location.reload();
    }
  render() {
    return (
      <div>Account-View</div>
    )
  }
}

export default Account;