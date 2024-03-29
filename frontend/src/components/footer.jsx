import React from 'react';
import { Nav } from 'react-bootstrap';

import Address from './address';
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
          <a className="navbar-brand pt-0 pb-0" href="/" style={{ width: '150px', flexShrink: '0' }}>
            <img className="img-fluid" src="/logo.png" alt="Auger Construction Logo" />
          </a>
        </div>
        <Nav className="justify-content-end">
          <Address/>
          <Phone/>
          <Email/>
          <Facebook/>
        </Nav>
      </footer>
      <div className="d-flex justify-content-center pt-3">
        <Nav.Link
          className="text-center"
          aria-label="Auger Architecture"
          href="https://www.auger-architecture.com"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.85rem' }}
        >
          Auger Architecture
          <img
            className="img-fluid"
            src="/auger_arch_emblem.png"
            alt="Auger Architecture Emblem"
            style={{ width: '34px', paddingLeft: '3px', paddingRight: '3px' }}
          />
          Website Design
        </Nav.Link>
      </div>
    </div>
  );
}
