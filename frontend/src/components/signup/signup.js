import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Dashboard from '../dashboard/dashboard';

const Signup = () => {
  const navigate = useNavigate();
  
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    signedUp: false,
    error: '',
  });

  const handleNameChange = (e) => {
    setState({ ...state,name: e.target.value });
  }

  const handleEmailChange = (e) => {
    setState({ ...state, email: e.target.value });
  }

  const handlePasswordChange = (e) => {
    setState({ ...state, password: e.target.value });
  }

  const handleConfirmPasswordChange = (e) => {
    setState({ ...state,confirmPassword: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      setState({ ...state, signedUp: false, error: 'Passwords do not match' });
    } else {
      localStorage.setItem('user', JSON.stringify({ name, email, password }));
      setState({ ...state, signedUp: true, error: '' });

      // Redirect to the login page
      // navigate('/login');
    }
  }

  if (state.signedUp) {
    return (
      <div className="signup-container">
        <h1>Sign Up Successful! You can log in now.</h1>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }

    return (
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={state.name}
            onChange={handleNameChange}
            required
          />
          <br /><br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={state.email}
            onChange={handleEmailChange}
            required
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={state.password}
            onChange={handlePasswordChange}
            required
          />
          <br /><br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={state.confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <br /><br />
          <button type="submit">Sign Up</button>
          {state.error && <p className="error-message">{state.error}</p>}
        </form>
      </div>
    );
  }

export default Signup;