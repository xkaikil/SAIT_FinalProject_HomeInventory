import React, { Component } from "react";
import "./StyleSignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  usernameHandle = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  emailHandle = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  passwordHandle = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  confirmPasswordHandle = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  submitHandle = (event) => {
    event.preventDefault();

    if (`${this.state.password}` === `${this.state.confirmPassword}`) {
      alert(`
            Username: ${this.state.username}\n
            Email: ${this.state.email} \n
            Password: ${this.state.password} \n
            Confirm Password: ${this.state.confirmPassword}`);
    } else {
      alert("Password does not match check your input");
    }
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submitHandle}>
          <h1>Sign Up</h1>

          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.usernameHandle}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.emailHandle}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.passwordHandle}
              value={this.state.password}
              required
            />
          </div>
          <div>
            <label>Confirm password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPasswordHandle}
              onChange={this.confirmPasswordHandle}
              required
            />
          </div>
          <br />
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
