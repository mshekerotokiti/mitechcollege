import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container py-4">
        <div className="row gy-4">
          {/* Quick Links */}
          <div className="col-12 col-md-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-styled">
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/contactus" className="footer-link">Contact Us</NavLink></li>
              <li><NavLink to="/faqs" className="footer-link">FAQs</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-5">
            <h5 className="text-uppercase">Register now</h5>
            <p>Stay updated with our latest courses and news.</p>
            <form
              action="https://docs.google.com/forms/d/192YkpS1bQ2Ic7FfEyfIeJ62fxILkrGxM8rrcTxAE2TI/edit"  
              method="post"
              target="_blank"
              noValidate
              className="newsletter-form"
            >
              <div className="input-group">
                <input
                  type="email"
                  name="EMAIL"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn subscribe-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Contact & Social */}
          <div className="col-12 col-md-4 text-md-end">
            <h5 className="text-uppercase">Contact</h5>
            <p className="mb-1">
              <a href="mailto:info@mitechcollege.com" className="footer-link">info@mitechcollege.com</a>
            </p>
            <p>Tel: +254 722 522 100</p>
            <div className="social-icons mt-3">
              <a href="https://www.facebook.com/profile.php?id=61575854141331" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/mi_tech_driving_school/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@mi_tech.college" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 border-top pt-3">
          <small>&copy; {new Date().getFullYear()} Mitech College. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
