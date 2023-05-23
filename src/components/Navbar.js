import React from 'react';
import './Navbar.css'; // Import the CSS file for the navbar styles

const Navbar = () => {
    return (
      <nav className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/resume">Resume</a></li>
          <li className="navbar-item"><a href="/posts">Posts</a></li>
          <li className="navbar-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
};

export default Navbar;