// components/About/Testimonials.jsx
import React from 'react';
import './About.css';

const Testimonials = () => (
  <div className="mb-5" data-aos="fade-up">
    <h4 className="hover-underline text-center py-2">What Our Students Say</h4>
    <div className="row text-center mt-4">
      <div className="col-md-4">
        <blockquote className="blockquote">
          <p>"The instructors were amazing. I passed my driving test on the first try!"</p>
          <footer className="blockquote-footer">Brian M.</footer>
        </blockquote>
      </div>
      <div className="col-md-4">
        <blockquote className="blockquote">
          <p>"I learned computer packages and it has helped me with my day to day work."</p>
          <footer className="blockquote-footer">Sophia K.</footer>
        </blockquote>
      </div>
      <div className="col-md-4">
        <blockquote className="blockquote">
          <p>"Flexible classes and great content. The trainers are real pros."</p>
          <footer className="blockquote-footer">Ali J.</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Testimonials;
