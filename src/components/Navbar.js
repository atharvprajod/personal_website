import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className = 'navbar'>
        <div>
          <Link to = '/' className = "navbar-header">
            <h2>ATHARV PRAJOD</h2>
          </Link>
          <ul>
            <li className="nav-item">
              <Link to = '/Experiences'>
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link to = '/PersonalPhilosophy'>
                Personal Philosophy
              </Link>
            </li>
            <li className="nav-item">
              <Link to = '/ConqueringEinstein'>
                Conquering Einstein
              </Link>
            </li>
            <li className="nav-item">
              <Link to = '/Contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
