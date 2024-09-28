import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/frontend/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
const Navbar = ({setShowLogin}) => {
  
  const [menu, setMenu] = useState("home");
  
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/"><div className="logo">
        <img src={assets.logo} alt="logo" />
        <h2>
          Hunger<span id="point">Point</span>
        </h2>
      </div>
      </Link>
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
          <Link to="/cart"><img src={assets.basket_icon} alt="basket" /></Link>
          <div className={getTotalCartAmount() === 0 ?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="signIn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
