import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Title({ data }) {
  // const woodColor = {
  //   background: `url('/maple-wood.jpeg') no-repeat`,
  //   backgroundSize: 'cover',
  //   WebkitBackgroundClip: 'text',
  //   color: 'transparent',
  //   display: 'inline-block',
  // };

  return (
    <div>
      <Carousel>
        {data.attributes.carouselPhotos.data.map((photo, index) => (
          <Carousel.Item key={"carousel" + index}>
            <img
              className="d-block w-100 img-fluid"
              src={photo.attributes.url}
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
      <div className="jumbotron bg-body-tertiary">
        <div className="container text-center py-3">
          <h1 className="text-body-emphasis">{data.attributes.title}</h1>
          <p className="mx-auto fs-4 text-muted">{data.attributes.subtitle}</p>
          <hr className="my-4"></hr>
          <p className="mx-auto text-muted">{data.attributes.description}</p>
        </div>
      </div>
    </div>
  );
}
