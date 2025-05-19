import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg- text-light bg-danger py-1 ">
        <div className="container d-flex justify-content-between align-items-center medium">
          <span>Email: info@mitechcollege.com</span>
          <span>Call Us: +254 722522100</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand text-dark bg-light sticky-top py-4">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand py-2" to="/">
          <img
              src={logo}
              alt="Logo"
              style={{
                height: 'auto',
                maxWidth: '65px',
                transform: 'scale(3.0)',
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
  {/* Nav Links */}
  <ul className="navbar-nav mx-auto">
    <li className="nav-item">
      <NavLink
        to="/"
        end
        className={({ isActive }) => isActive ? "nav-link active custom-nav-link" : "nav-link custom-nav-link"}
      >
        Home
        <span className="underline"></span>
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
        About
        <span className="underline"></span>
      </NavLink>
      <ul className="dropdown-menu">
        <li>
          <NavLink to="/about" className="dropdown-item">
            Why Mitech
          </NavLink>
        </li>
        <li>
          <NavLink to="/faqs" className="dropdown-item">
            FAQs
          </NavLink>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <NavLink
        to="/contactus"
        className={({ isActive }) => isActive ? "nav-link active custom-nav-link" : "nav-link custom-nav-link"}
      >
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
