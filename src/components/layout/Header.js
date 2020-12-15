import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>
        <h3>Find your Favorite Cocktails!</h3>
        <br />
        <Link to='/home'>Home</Link>
        <span> | </span>
        <Link to='/search-cocktails'>Search</Link>
        <span> | </span>
        <Link to='#'>Your Favorites</Link>
        <span> | </span>
        <Link to='#'>About</Link>
      </div>
    </header>
  );
}
