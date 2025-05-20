// components/About/WhyChooseUs.jsx
import React from 'react';
import './About.css';

const WhyChooseUs = () => (
  <div className="row mb-5">
     <div className="col-md-6">
      <h4 className="mb-5 hover-underline text-center">Welcome to where you belong !</h4>
      <p>
        MI-TECH Driving School & Computer College is a leading institution dedicated to providing practical,
        professional training in both driving and digital skills.
      </p>
    </div> 
    <div className="col-md-6">
      <h4 className="hover-underline">Why Choose Us?</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">✔ Flexible payment options</li>
        <li className="list-group-item">✔ Both physical and online training</li>
        <li className="list-group-item">✔ Learn with industrial experts</li>
        <li className="list-group-item">✔ Certified trainers</li>
        <li className="list-group-item">✔ Expert-developed curriculum</li>
      </ul>
    </div>
  </div>
);

export default WhyChooseUs;
