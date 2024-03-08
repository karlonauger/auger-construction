import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Title() {
    const { loading, error, data } = useFetch('main-page?populate=*')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :/</p>
  
    console.log(data);
  return (
    <div
      className="position-relative overflow-hidden text-center"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `url(${process.env.REACT_APP_API_URL + data.attributes.titlePhoto.data.attributes.url}) center/cover no-repeat`
      }}
    >
      <div className="col-md-8 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold">{data.attributes.title}</h1>
        <h2 className="fw-normal text-muted">{data.attributes.subtitle}</h2>
        <div className="nav d-flex justify-content-center lead fw-normal">
          <a className="nav-link" href="#projects">Learn more</a>
        </div>
      </div>
    </div>
  );
}
