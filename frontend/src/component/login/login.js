import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
  }

  render() {
    return (
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
