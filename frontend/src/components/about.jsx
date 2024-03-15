import React from 'react';

export default function About({ data }) {
  const aboutPhoto = data.attributes.aboutPhoto.data;

  return (
    <div id="about" className="jumbotron bg-body-tertiary">
      <div className="position-relative container my-5 mb-0">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <img
                src={aboutPhoto.attributes.url}
                alt={aboutPhoto.attributes.name}
                className="img-fluid rounded-3"
                aria-label={data.attributes.aboutTitle}
              />
            </div>
            <div className="col-md-6">
              <h1 className="text-body-emphasis">{data.attributes.aboutTitle}</h1>
              <p className="mx-auto fs-4 text-muted">
                {data.attributes.aboutDescription}
              </p>
              <hr className="my-4" />
              <p className="mx-auto text-muted">
                Specializing in kitchen and bathroom renovations.
                Specializing in kitchen and bathroom renovations.
                Specializing in kitchen and bathroom renovations.
                Specializing in kitchen and bathroom renovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
