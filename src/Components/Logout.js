
import React, { Component } from 'react'
import {Redirect,Link} from 'react-router-dom';

export class Logout extends Component {
    constructor(props){
        super(props);
        
    }

    logoutHandler = () => {
        localStorage.setItem('user', []);
        window.location.reload();
        alert("logged out succesfully");
        
    }

  render() {
    
    
    return (
        <div className='logout-wrapper'>
        <h1>Are you sure you want to log out?</h1>

        <button onClick={this.logoutHandler} className="deleteItem">Yes, Log me out</button>

        </div>
    )
    } 
  }


export default Logout;
