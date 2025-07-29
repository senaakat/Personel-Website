import React from 'react'
import Layout from '../components/layout/Layout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Projects from '../pages/Projects.jsx';
import Technologies from '../pages/Technologies.jsx';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/technologies" element={<Layout><Technologies /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}


