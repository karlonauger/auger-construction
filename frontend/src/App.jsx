import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

import Navbar from './components/navbar';
import Title from './components/title';
import Projects from './components/projects';
import About from './components/about';
import Footer from './components/footer';
import useFetch from './hooks/useFetch';

export default function App() {
  const { loading, error, data } = useFetch('main-page?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching content</p>

  return (
    <div className="App">
      <Navbar />
      <Title data={data} />
      <Projects />
      <About data={data}/>
      <Footer />
    </div>
  );
}
