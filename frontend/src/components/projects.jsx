import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects({ data }) {
  return (
    <div id="projects" className="jumbotron">
      <div className="position-relative container my-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
          {data.map(project => (
            <div key={project.attributes.slug} className="col">
              <Link to={`/projects/${project.attributes.slug}`} className="text-decoration-none">
                <div className="card shadow-sm">
                  <img
                    src={project.attributes.coverPhoto.data.attributes.formats.medium.url}
                    alt={project.attributes.coverPhoto.data.attributes.name}
                    className="card-img-top img-fluid"
                    width="100%"
                    style={{ maxHeight: '442px', objectFit: 'cover' }}
                    aria-label={project.attributes.name}
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white text-shadow">
                    <h4 className="card-title">{project.attributes.name}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
