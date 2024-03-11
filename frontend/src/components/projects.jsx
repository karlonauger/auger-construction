import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Projects() {
  const { loading, error, data } = useFetch('projects?populate=*');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :/</p>

  return (
    <div id="projects" className="jumbotron">
      <div className="position-relative container my-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
          {data.map(project => (
            <div key={project.attributes.slug} className="col">
              <div className="card shadow-sm">
                <img
                  src={process.env.REACT_APP_API_URL + project.attributes.cover_image.data.attributes.url}
                  alt={project.attributes.cover_image.data.attributes.name}
                  className="card-img-top img-fluid"
                  width="100%"
                  style={{maxHeight: '442px', objectFit: 'cover'}}
                  aria-label={project.attributes.name}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white text-shadow">
                  <h4 className="card-title">{project.attributes.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
