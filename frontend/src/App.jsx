import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import ProjectDetails from './components/projectDetails';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
