import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span>&copy; {new Date().getFullYear()} Mitech College. All Rights Reserved.</span>
        <span>
          <a href="mailto:info@mitechcollege.com" className="footer-link">
            info@mitechcollege.com
          </a>
          {' '}| Tel: +254 722 522 100
        </span>
      </div>
    </footer>
  );
};

export default Footer;
