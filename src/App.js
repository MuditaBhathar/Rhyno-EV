// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Rentals from './Components/Rentals';
import Prebook from './Components/Prebook';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> {/* Wrap Routes around Route components */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/prebook" element={<Prebook />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
