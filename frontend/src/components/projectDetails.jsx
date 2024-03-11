import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const { loading, error, data } = useFetch('projects?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>;

  const project = data.find(proj => proj.attributes.slug === projectId);
  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <div className="container text-center my-3 pt-1">
        <h1>{project.attributes.name}</h1>
        <h4>{project.attributes.location}</h4>
        <p>{project.attributes.description}</p>
      </div>
      <div id="projects" className="jumbotron">
      <div className="position-relative container my-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
          {project.attributes.images.data.map((image, index) => (
            <div key={"image" + index} className="col">
              <div className="card shadow-sm">
                <img
                  src={process.env.REACT_APP_API_URL + image.attributes.url}
                  alt={image.attributes.name}
                  className="card-img-top img-fluid"
                  width="100%"
                  style={{ maxHeight: '442px', objectFit: 'cover' }}
                  aria-label={image.attributes.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
