import React from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './navbar';

import useFetch from '../hooks/useFetch';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const { loading, error, data } = useFetch('/projects?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>;

  const project = data.find(proj => proj.attributes.slug === projectId);
  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <Navbar data={data} />
      <div className="jumbotron bg-body-tertiary">
        <div className="container text-center py-4">
          <h1 className="text-body-emphasis">{project.attributes.name}</h1>
          <p className="mx-auto fs-4 text-muted">{project.attributes.location}</p>
          <hr class="my-4"></hr>
          <p class="mx-auto text-muted">{project.attributes.description}</p>
        </div>
      </div>
      <div id="projects" className="jumbotron">
      <div className="position-relative container my-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
          {project.attributes.photos.data.map((photo, index) => (
            <div key={"image" + index} className="col">
              <div className="card shadow-sm">
                <img
                  src={photo.attributes.url}
                  alt={photo.attributes.name}
                  className="card-img-top img-fluid"
                  width="100%"
                  style={{ maxHeight: '442px', objectFit: 'cover' }}
                  aria-label={photo.attributes.name}
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
