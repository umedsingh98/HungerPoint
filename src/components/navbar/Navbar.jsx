import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/frontend/assets.js";
const Navbar = () => {
  
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={assets.logo} alt="logo" />
        <h2>
          Hunger<span id="point">Point</span>
        </h2>
      </div>

      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="img-fluid" alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button className="signIn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
