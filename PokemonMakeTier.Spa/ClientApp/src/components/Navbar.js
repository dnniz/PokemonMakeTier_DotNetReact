import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logo from "../images/pokemon_logo_japanese.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          <span className="font-weight-light">Pokemon</span>
          <span className="font-weight-bold">MakeTier</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
