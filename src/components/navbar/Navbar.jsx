import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="items">
          <a href="#projects">projects</a>
        </li>
        <li className="items">
          <a href="#about">about</a>
        </li>
        <li className="items">
          <a href="#interests">interests</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
