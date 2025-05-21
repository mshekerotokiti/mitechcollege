import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/About/About';
import ContactUs from './pages/Contact/ContactUs';



function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contactus' element= {<ContactUs />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
