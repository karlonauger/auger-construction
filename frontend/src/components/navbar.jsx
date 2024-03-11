import React from 'react';

import Contact from './contact';

export default function Navbar() {
  return (
    <header
      className="navbar navbar-expand-sm"
      style={{
        backgroundImage: `url('/maple-wood.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand pt-0 pb-0" href="/" style={{ width: '150px' }}>
          <img className="img-fluid" src="/logo.png" alt="Auger Construction Logo" />
        </a>
        <Contact/>
      </div>
    </header>
  );
}
