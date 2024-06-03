import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Contact from '../page/Contact';
import About from '../page/About';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing;
