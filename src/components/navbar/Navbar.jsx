import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="items">
          <Link activeClass="active" spy to="projects" offset={-90}>
            projects
          </Link>
        </li>
        <li className="items">
          <Link activeClass="active" spy to="about" offset={-90}>
            about
          </Link>
        </li>
        <li className="items">
          <Link activeClass="active" spy to="interests" offset={-90}>
            interests
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
