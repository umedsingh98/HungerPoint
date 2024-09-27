import React, { useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/frontend/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross"
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name..." required />
          )}

          <input type="email" placeholder="Your email..." required />
          <input type="password" placeholder="Your password..." required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>
        {currentState === "Login" ? <p>Don't have a account? <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span></p> : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Log In</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;
