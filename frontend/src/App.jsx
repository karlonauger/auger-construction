import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Home from './components/home';
import ProjectDetails from './components/projectDetails';
import Footer from './components/footer';

ReactGA.initialize(process.env.REACT_APP_GA_ID, {
  send_page_view: true,
  gtagOptions: { cookie_flags: 'max-age=7200;secure;samesite=none' }
});

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
