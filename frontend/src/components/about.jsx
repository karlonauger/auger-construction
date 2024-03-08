import React from 'react';

export default function About() {
  return (
    <div id="about" className="jumbotron">
      <div className="position-relative container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <div className="row">
            <div className="col-md-6 mb-3">
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
