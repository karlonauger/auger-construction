import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import GoogleAnalytics from './components/googleAnalytics';
import ProjectDetails from './components/projectDetails';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
