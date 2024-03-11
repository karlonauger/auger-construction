import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Title({ data }) {
  const woodColor = {
    background: `url('/maple-wood.jpeg') no-repeat`,
    backgroundSize: 'cover',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
  };

  return (
    <div>
      <Carousel>
        {data.attributes.carouselPhotos.data.map((photo, index) => (
          <Carousel.Item key={"carousel" + index}>
            <img
              className="d-block w-100 img-fluid"
              src={process.env.REACT_APP_API_URL + photo.attributes.url}
              alt={photo.attributes.name}
              style={{
                height: 'calc(82vh - 48px)', // Subtract Header height
                display: 'flex',
                alignItems: 'center',
                objectFit: 'cover',
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="container text-center my-3 pt-1">
        <h1>{data.attributes.title}</h1>
        <h4>{data.attributes.subtitle}</h4>
      </div>
    </div>
  );
}
