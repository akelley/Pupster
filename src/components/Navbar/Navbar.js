import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>
  <nav className="navbar navbar-default">
    <ul className="nav navbar-nav">
      <li className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/about">Pupster</Link>
      </li>
      <li className={window.location.pathname === "/about" ? "active" : ""}>
        <Link to="/about">About</Link>
      </li>
      <li className={window.location.pathname === "/discover" ? "active" : ""}>
        <Link to="/discover">Discover</Link>
      </li>
      <li className={window.location.pathname === "/search" ? "active" : ""}>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </nav>;

export default Navbar;
