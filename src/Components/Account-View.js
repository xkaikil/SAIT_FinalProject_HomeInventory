import { reloadResources } from 'i18next';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

export class Account extends Component {
  



  constructor(props) {
    super(props);

    
  }
  
  render() {
    let user = JSON.parse(localStorage.getItem('user'));
    function onClick(){
      console.log(user.id);
      axios
      .put("http://localhost:4000/admin/deactivate-Account/" + user.id)
      .then((res) => {
        if (res.status === 200) {
          alert("Account Deactivated")
  
      
       
  
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  }
    
    
    try {
      let user = JSON.parse(localStorage.getItem('user'));

      let roleString = `(${user.role})`



      return (
        <div className='accountNav'>
          <h1>Account Settings:</h1>
          <h1>User: {user.name} {roleString}</h1>

          
          <Link to={"/editProfile"} className="nav-link">
            <button>Edit account settings</button>
      </Link>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <button onClick={onClick}>Deactivate Account</button>
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