import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Projects() {
  const { loading, error, data } = useFetch('projects?populate=*');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :/</p>


  return (
    <div id="projects" className="jumbotron">
      <div className="position-relative container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div>
                {data.map(project => (
                  <div key={project.attributes.slug}>
                    <h3>{project.attributes.name}</h3>
                    <p className="mx-auto fs-4 text-muted">
                      {project.attributes.location}
                    </p>
                    <hr className="my-4" />
                    <p className="mx-auto text-muted">
                      {project.attributes.description}
                    </p>
                    <img
                      src={process.env.REACT_APP_API_URL + project.attributes.cover_image.data.attributes.url}
                      alt={project.attributes.cover_image.data.attributes.name}
                      className="img-fluid rounded-3 border border-5 border-primary-subtle"
                    />
                  </div>
                ))}
              </div>
              <img
                src="partner_to_profit_ss.png"
                alt="George Auger Screenshot"
                className="img-fluid rounded-3 border border-5 border-primary-subtle"
              />
            </div>
            <div className="col-md-6">
              <h1 className="text-body-emphasis">About</h1>
              <p className="mx-auto fs-4 text-muted">
                Residential remodeling, specializing in kitchen and bathroom renovations
              </p>
              <hr className="my-4" />
              <p className="mx-auto text-muted">
                Residential remodeling, specializing in kitchen and bathroom renovations.
                Residential remodeling, specializing in kitchen and bathroom renovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
