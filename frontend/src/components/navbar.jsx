import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar navbar-expand-sm fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand pt-0 pb-0" href="/" style={{ width: '150px' }}>
          <img className="img-fluid" src="/logo.png" alt="Auger Construction Logo" />
        </a>
        <div className="collapse navbar-collapse fw-normal">
          <ul className="nav me-auto">
            <li>
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li>
              <a className="nav-link" href="#about">About</a>
            </li>
            <li>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li>
              <a className="nav-link" href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
