import React from 'react';
import './Home.css'; 
import img1 from '../../assets/img5.jpeg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpeg';
import Testimonials from '../About/Testimonials';


const Home = () => {
  const slides = [
    {
      image: img1,
      title: 'Learn to Drive With Confidence',
      subtitle: 'Start your driving journey with experienced instructors and hands-on training.',
      points: 'NTSA Certified |  Modern Vehicles |  Flexible Schedules',
      button: 'Enroll Today',
    },
    {
      image: img2,
      title: ' Become Tech-Savvy at Mitech',
      subtitle: 'Master essential digital skills for work and life.',
      points: 'Microsoft Office | Coding | Graphic Design | AI Skills and so much more',
      // button: 'View Courses',
    },
    {
      image: img3, 
      title: '',
      subtitle: 'Why choose one when you can do more?',
      points: 'Practical Training | Flexible Classes |  Convenient Location',
      button: 'Get Started',
    },
    {
      image: img4,
      title: 'Join Mitech Today!',
      subtitle: 'Build your confidence behind the wheel and at the keyboard.',
      points: ' Call Us |  Apply Online |  Get Certified',
      button: 'Contact Us Now',
    },
  ];

  return (
    <section>
    <div id="homepageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90vh',
              color: '#fff',
              position: 'relative',
            }}
          >
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
              <div className="bg-dark bg-opacity-50 p-2 rounded">
                <h1 className="fw-bold">{slide.title}</h1>
                <p className="lead">{slide.subtitle}</p>
                <p>{slide.points}</p>
                <a href="/contactus" className="btn btn-warning btn-lg mt-3">
                  {slide.button}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#homepageCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#homepageCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className='text-center'>
    <Testimonials />
    <h5 className="text-danger">Join us today and take the first step towards a safer, smarter future!</h5>
    <a href="/contactus" className="btn b mt-3">Contact Us</a>
    </div>
    </section>
  );
};

export default Home;
