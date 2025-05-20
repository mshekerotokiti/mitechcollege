// components/About/ShortCourses.jsx
import React from 'react';
import { FaLaptopCode, FaChartLine, FaLanguage } from 'react-icons/fa';
import './About.css';

const courses = [
  { name: "Monitoring & Evaluation (M&E)", icon: <FaChartLine /> },
  { name: "Project Management", icon: <FaChartLine /> },
  { name: "Graphic Design", icon: <FaLaptopCode /> },
  { name: "Accounting (QuickBooks)", icon: <FaLaptopCode /> },
  { name: "Computer Packages (Level 1 & 2)", icon: <FaLaptopCode /> },
  { name: "Data Analysis (SPSS, STATA & Excel)", icon: <FaChartLine /> },
  { name: "Funding Proposal", icon: <FaChartLine /> },
  { name: "Basic Programming", icon: <FaLaptopCode /> },
  { name: "Artificial Intelligence", icon: <FaLaptopCode /> },
  { name: "Digital Marketing", icon: <FaChartLine /> },
  { name: "Web Development", icon: <FaLaptopCode /> },
  { name: "German Language (A1, A2, B1)", icon: <FaLanguage /> },
];

const ShortCourses = () => (
  <div className="mb-5" data-aos="zoom-in">
    <h4 className="mb-4 hover-underline text-center short-courses-heading">
  Our Short Courses
</h4>
    <div className="row row-cols-1 row-cols-md-2 g-3">
      {courses.map((course, idx) => (
        <div key={idx} className="col">
          <div className="border p-3 rounded bg-light shadow-sm d-flex align-items-center gap-2 hover-card">
            <span className="text-primary fs-4">{course.icon}</span>
            <span>{course.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ShortCourses;
