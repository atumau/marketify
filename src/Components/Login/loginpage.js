import React, { useState } from "react";
import "../Login/loginpage.css";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleContinueWithEmail = () => {
    setShowPasswordInput(true);
  };

  const handleLogin = () => {
    // Perform login action with email and password
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <>
      <div className="login-main">
        <div className="login-container">
          <img src="logo.png" className="login-logo" alt="" />
          <h2 className="login-head">Log in</h2>
          <p className="login-text">Continue to Marketify</p>
          <div className="email-type-ahead">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>

          {showPasswordInput && (
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
            </div>
          )}

          {showPasswordInput && (
            <button className="login-button" onClick={handleLogin}>
              Log in
            </button>
          )}

          {!showPasswordInput && (
            <button
              className="continue-to-shopify"
              onClick={handleContinueWithEmail}
            >
              Continue
            </button>
          )}

          <div className="or-divider">
            <span>or</span>
          </div>

          <div className="social-login-icons">
            <FaGoogle className="social-icon" />
            <FaApple className="social-icon" />
            <FaFacebook className="social-icon" />
          </div>

          <div className="new-to-shopify">
            <p>
              New to Shopify? <a href="#">Create an account</a>
            </p>
          </div>

          <div className="help-privacy-terms">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
