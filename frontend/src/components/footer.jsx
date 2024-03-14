import React from 'react';
import { Nav } from 'react-bootstrap';

import Phone from './phone';
import Email from './email';
import Facebook from './facebook';

export default function Footer() {
  return (
    <div
      className="position-relative py-4"
      style={{
        backgroundImage: `url('/maple-wood.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <footer className="container d-flex justify-content-between align-items-center pt-1 border-top">
        <div className="d-flex gap-2 align-items-center">
          <a className="navbar-brand pt-0 pb-0" href="/" style={{ width: '130px' }}>
            <img className="img-fluid" src="/logo.png" alt="Auger Construction Logo" />
          </a>
        </div>
        <Nav>
          <Phone/>
          <Email/>
          <Facebook/>
        </Nav>
      </footer>
    </div>
  );
}
