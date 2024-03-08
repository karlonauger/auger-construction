import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

import Navbar from './components/navbar';
import Title from './components/title';
import Projects from './components/projects';
import About from './components/about';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
