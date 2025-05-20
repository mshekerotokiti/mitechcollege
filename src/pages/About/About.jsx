import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import ShortCourses from './ShortCourses';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="p-2" style={{ backgroundColor: "#D9D9D9", fontFamily: 'Roboto' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="hover-underline">MITECH DRIVING SCHOOL & COMPUTER COLLEGE</h2>
          <p className="lead fst-italic text-secondary">Empowering Safe Drivers and Digital Experts</p>
          {/* <hr className="mx-auto" /> */}
        </div>
        <div className="why-choose-section" data-aos="fade-right">
          <div className="container">
            <WhyChooseUs />
          </div>
        </div>
        <ShortCourses />

        <div className="bg-body-secondary py-3 rounded shadow-sm" data-aos="fade-left">
          <Testimonials />
        </div>

        <div className="text-center mt-4" data-aos="zoom-in-up">
          <h5 className="text-danger">Join us today and take the first step towards a safer, smarter future!</h5>
          <a href="/contactus" className="btn b mt-3">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
