import React from 'react';

import Navbar from './navbar';
import Title from './title';
import Projects from './projects';
import About from './about';

import useFetch from '../hooks/useFetch';

export default function Home() {
  const { loading, error, data } = useFetch('main-page?populate=*')
  const projects = useFetch('projects?populate=*');

  if (loading || projects.loading) return <p>Loading...</p>
  if (error || projects.error) return <p>Error :/</p>

  return (
    <div>
      <Navbar data={projects.data} />
      <Title data={data} />
      <Projects data={projects.data} />
      <About data={data} />
    </div>
  );
}
