import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Carousel } from 'react-bootstrap';

import Navbar from './navbar';

import useFetch from '../hooks/useFetch';

export default function ProjectDetails() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const { projectId } = useParams();
  const { loading, error, data } = useFetch('/projects?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>;

  const project = data.find(proj => proj.attributes.slug === projectId);
  if (!project) return <p>Project not found</p>;

  const photos = project.attributes.photos.data
  return (
    <div>
      <Navbar data={data} />
      <div className="jumbotron bg-body-tertiary">
        <div className="container text-center py-4">
          <h1 className="text-body-emphasis">{project.attributes.name}</h1>
          <p className="mx-auto fs-4 text-muted">{project.attributes.location}</p>
          <hr className="my-4"></hr>
          <p className="mx-auto text-muted">{project.attributes.description}</p>
        </div>
      </div>
      <div id="projects" className="jumbotron">
        <div className="position-relative container my-5">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
            {photos.map((photo, index) => (
              <div key={"image" + index} className="col">
                <div className="card shadow-sm">
                  <img
                    src={photo.attributes.formats.medium.url}
                    alt={photo.attributes.name}
                    className="card-img-top img-fluid"
                    width="100%"
                    style={{ maxHeight: '442px', objectFit: 'cover' }}
                    aria-label={photo.attributes.name}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} fullscreen={true} onHide={() => setShowModal(false)}>
        <Modal.Body style={{ backgroundColor: 'rgba(52, 58, 64, 0.8)' }}>
          <button 
            type="button"
            className="btn-close btn-close-white" 
            aria-label="Close"
            onClick={() => setShowModal(false)} 
            style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1rem', 
              zIndex: 1050
            }}
          ></button>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            height='95vh'
          >
            {photos.map((photo, index) => (
              <Carousel.Item key={"carousel_image" + index} style={{ textAlign: 'center' }}>
                <img
                  src={photo.attributes.url}
                  alt={photo.attributes.name}
                  style={{ maxHeight: '95vh' }}
                  aria-label={photo.attributes.name}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};
