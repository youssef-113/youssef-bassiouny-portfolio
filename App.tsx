import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import About from './views/WorkExperience';
import Projects from './views/Projects';
import Skills from './views/aboutMe';
import Resources from './views/Certification';
import Contact from './views/Contact';

import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      <ParticleBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;