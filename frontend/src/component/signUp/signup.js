import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
  }

  render() {
    return (
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <br /><br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
          <br /><br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            required
          />
          <br /><br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;