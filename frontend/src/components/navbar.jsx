import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

import Phone from './phone';
import Email from './email';
import Facebook from './facebook';

export default function Navbar({ data }) {
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
        <Link to="/" className="navbar-brand pt-0 pb-0 text-decoration-none" style={{ width: '150px' }}>
          <img className="img-fluid" src="/logo.png" alt="Auger Construction Logo" />
        </Link>
        <Nav>
          <NavDropdown title="Projects">
            {data.map(project => (
              <NavDropdown.Item key={project.attributes.slug}>
                <Link
                  to={`/projects/${project.attributes.slug}`}
                  className="text-dark text-decoration-none"
                >
                  {project.attributes.name}
                </Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Phone/>
          <Email/>
          <Facebook/>
        </Nav>
      </div>
    </header>
  );
}
