import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import ShortCourses from './ShortCourses';
import WhyChooseUs from './WhyChooseUs';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="p-2" style={{ backgroundColor: "#D9D9D9", fontFamily: 'Roboto' ,fontSize: '25px'}}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="hover-underline">MITECH DRIVING SCHOOL & COMPUTER COLLEGE</h2>
          <p className="lead fst-italic text-secondary">Empowering Safe Drivers and Digital Experts</p>
        </div>
        <div className="why-choose-section" data-aos="fade-right">
          <div className="container">
            <WhyChooseUs />
          </div>
        </div>
        <ShortCourses />
      </div>
    </section>
  );
};

export default About;
