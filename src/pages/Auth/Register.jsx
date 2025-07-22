import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    if (password !== passwordConfirmation) {
      setErrors({ password_confirmation: 'Passwords do not match.' });
      return;
    }

    // No backend logic, only UI behavior.
    console.log({ email, password, passwordConfirmation });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'is-invalid' : ''}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={errors.password ? 'is-invalid' : ''}
              />
              <button
                type="button"
                className="eye-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className={errors.password_confirmation ? 'is-invalid' : ''}
              placeholder="Confirm your password"
            />
            {errors.password_confirmation && (
              <small className="error">{errors.password_confirmation}</small>
            )}
          </div>

          <button type="submit" className="auth-btn register-btn">
            Register
          </button>
        </form>
        <p className="switch-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
