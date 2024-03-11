import React from 'react';

import Contact from './contact';

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
      <footer className="container d-flex justify-content-between align-items-center  border-top">
        <div className="d-flex gap-2 align-items-center">
          <a className="navbar-brand pt-0 pb-0" href="/" style={{ width: '30px' }}>
            <img className="img-fluid" src="/logo_emblem.png" alt="Auger Construction Logo" />
          </a>
          <span className="ml-3 mr-2 text-white">© 2024 Auger Construction</span>
        </div>
        <Contact/>
      </footer>
    </div>
  );
}
