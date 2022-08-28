import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="nav-container">
      <h1>Book Store</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  </header>
);
export default Navbar;
