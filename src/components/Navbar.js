import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="navbar-cnt">
        <div className="navbar">
          <div>
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </div>
          <div>
            <Link to="search">
              <i className="fas fa-search"></i>
            </Link>
          </div>
          <div>
            <Link to="about">
              <i className="fas fa-bars"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
