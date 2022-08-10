
import React, { Component } from 'react'
import {Redirect,Link} from 'react-router-dom';

export class Logout extends Component {
    constructor(props){
        super(props);
        
    }

    logoutHandler = () => {
        localStorage.setItem('user', []);
        
        
    }
  render() {
    
    
    return (
        <div className='logout-wrapper'>
        <h1>Are you sure you want to log out?</h1>
        <Link to="/account">
        <button onClick={this.logoutHandler}>Yes, Log me out</button>
        </Link>
        </div>
    )
    } 
  }


export default Logout;
