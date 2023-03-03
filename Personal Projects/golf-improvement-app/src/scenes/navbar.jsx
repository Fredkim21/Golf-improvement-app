import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/profile" className="navbar-link">Profile</Link>
      <Link to="/drills" className="navbar-link">Drills</Link>
    </div>
  );
}

export default Navbar;
