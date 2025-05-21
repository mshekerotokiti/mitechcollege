import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLaptopCode, FaChartLine, FaLanguage } from 'react-icons/fa';
import './About.css';

const courses = [
  { name: "Monitoring & Evaluation (M&E)", slug: "monitoring-evaluation", icon: <FaChartLine /> },
  { name: "Project Management", slug: "project-management", icon: <FaChartLine /> },
  { name: "Graphic Design", slug: "graphic-design", icon: <FaLaptopCode /> },
  { name: "Accounting (QuickBooks)", slug: "accounting-quickbooks", icon: <FaLaptopCode /> },
  { name: "Computer Packages", slug: "computer-packages", icon: <FaLaptopCode /> },
  { name: "Data Analysis (SPSS, STATA & Excel)", slug: "data-analysis", icon: <FaChartLine /> },
  { name: "Funding Proposal", slug: "funding-proposal", icon: <FaChartLine /> },
  { name: "Basic Programming", slug: "basic-programming", icon: <FaLaptopCode /> },
  { name: "Artificial Intelligence", slug: "artificial-intelligence", icon: <FaLaptopCode /> },
  { name: "Digital Marketing", slug: "digital-marketing", icon: <FaChartLine /> },
  { name: "Web Development", slug: "web-development", icon: <FaLaptopCode /> },
  { name: "German Language", slug: "german-language", icon: <FaLanguage /> },
];


const ShortCourses = () => (
  <div className="mb-5" data-aos="zoom-in">
    <div className='text-center py-4'>
      <h4 className="hover-underline short-courses-heading">OUR SHORT COURSES</h4>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-3">
    {courses.map((course, idx) => (
  <div key={idx} className="col">
    <NavLink to={`/courses/${course.slug}`} className="text-decoration-none text-dark">
      <div className="border p-3 rounded bg-light shadow-sm d-flex align-items-center gap-2 hover-card">
        <span className="course-icon text-primary fs-4">{course.icon}</span>
        <span>{course.name}</span>
      </div>
    </NavLink>
  </div>
))}
</div>
  </div>
);

export default ShortCourses;
