import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-danger text-light py-1">
        <div className="container d-flex justify-content-between align-items-center medium">
          <span>Email: info@mitechcollege.com</span>
          <span>Call Us: +254 722522100</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand py-4" to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: 'auto',
                maxWidth: '68px',
                transform: 'scale(3.5)',
              }}
            />
          </NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links & Search */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mx-auto fs-5">
              <li className="nav-item">
                <NavLink to="/" className="nav-link custom-nav-link">
                  Home <span className="underline"></span>
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="/about"
                  className="nav-link dropdown-toggle custom-nav-link"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About <span className="underline"></span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/about" className="dropdown-item">Why Mitech</NavLink></li>
                  <li><NavLink to="/faqs" className="dropdown-item">FAQs</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="/courses"
                  className="nav-link dropdown-toggle custom-nav-link"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                  <span className="underline"></span>
                </NavLink>
                <ul className="dropdown-menu">
                  {/* <li><NavLink to="/courses" className="dropdown-item">All Courses</NavLink></li> */}
                  <li><NavLink to="/courses/graphic-design" className="dropdown-item">Graphic Design</NavLink></li>
                  <li><NavLink to="/courses/web-development" className="dropdown-item">Web Development</NavLink></li>
                  <li><NavLink to="/courses/computer-packages" className="dropdown-item">Computer Packages</NavLink></li>
                  <li><NavLink to="/courses/german-language" className="dropdown-item">German Language</NavLink></li>
                  
                </ul>
              </li>


              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link custom-nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex mt-3 mt-xl-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
