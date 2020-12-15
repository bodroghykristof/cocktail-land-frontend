import React from "react";
import { Link } from "react-router-dom";

import "../../components/css/header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left-container">
        <Link className="home-link" to="/home">Home</Link>
      </div>

      <div className="header-middle-container">
        <h3>Find your Favorite Cocktails!</h3>
      </div>

      <div className="header-right-container">
        <div className="link-container">
          <Link className="link" to="/search-cocktails">Search</Link>
          <Link className="link" to="#">Your Favorites</Link>
          <Link className="link" to="#">About</Link>
        </div>
      </div>
    </div>
  );
}