import React, { useState, useEffect } from 'react';
import './index.css';

function Home() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, bg: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, bg: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, bg: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 4, bg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
  ];

  // Gallery images
  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=500&auto=format&fit=crop&q=60', alt: 'Code snippet' },
    { id: 2, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60', alt: 'Development setup' },
    { id: 3, src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60', alt: 'Mobile app' },
    { id: 4, src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&auto=format&fit=crop&q=60', alt: 'Web design' }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark glass-nav">
        <div className="container">
          <a className="navbar-brand fw-bold animate-fadeIn" href="#">
            <i className="bi bi-code-slash me-2 icon-dark"></i>Craig
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <a className="nav-link" href="#projects">
                  <i className="bi bi-folder2-open me-1 icon-dark"></i>Projects
                </a>
              </li>
              <li className="nav-item animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <a className="nav-link" href="#gallery">
                  <i className="bi bi-images me-1 icon-dark"></i>Gallery
                </a>
              </li>
              <li className="nav-item animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <a className="nav-link" href="#contact">
                  <i className="bi bi-envelope me-1 icon-dark"></i>Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="glass-hero text-white text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="container animate-fadeIn">
          <h1 className="display-4 fw-bold mb-3 animate-float">Craig Macharia</h1>
          <p className="lead fs-3 mb-4">
            <span className="badge badge-glass">Full-Stack Developer</span>
          </p>
          <p className="mb-4 fs-5">I build modern web applications with Django, React, and AI integrations</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#projects" className="btn btn-glass btn-lg px-4">
              <i className="bi bi-eye me-2 icon-dark"></i>View Work
            </a>
            <a href="#contact" className="btn btn-glass-primary btn-lg px-4">
              <i className="bi bi-send me-2 icon-dark"></i>Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="container my-5">
        <div className="slideshow shadow-lg">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="section" id="projects">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            <i className="bi bi-stack me-2 icon-dark"></i>Featured Projects
          </h2>
          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="card glass-card project-card h-100 border-0">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-building fs-1 icon-dark"></i>
                  </div>
                  <h5 className="card-title">APPEALING PORTFOLIO</h5>
                  <p className="card-text">Full-stack hotel management system with Django backend and React frontend.</p>
                  <div className="mt-3">
                    <span className="badge badge-glass me-1">HTML</span>
                    <span className="badge badge-glass me-1">REACT</span>
                    <span className="badge badge-glass">SCSS</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href="https://elizasportfolio.netlify.app/" className="btn btn-sm btn-glass me-2">
                  <i className="bi bi-box-arrow-up-right icon-dark"></i> Live
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="card glass-card project-card h-100 border-0">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-layout-text-window-reverse fs-1 icon-dark"></i>
                  </div>
                  <h5 className="card-title">Landing Page Board</h5>
                  <p className="card-text">Collection of responsive landing page templates for various business needs.</p>
                  <div className="mt-3">
                    <span className="badge badge-glass me-1">HTML</span>
                    <span className="badge badge-glass me-1">CSS</span>
                    <span className="badge badge-glass">JavaScript</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href="https://landingpageboard.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-glass">
                    <i className="bi bi-box-arrow-up-right icon-dark"></i> Live
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="card glass-card project-card h-100 border-0">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-house-door fs-1 icon-dark"></i>
                  </div>
                  <h5 className="card-title">Ladha House</h5>
                  <p className="card-text">Real estate listing website with property search and filtering capabilities.</p>
                  <div className="mt-3">
                    <span className="badge badge-glass me-1">React</span>
                    <span className="badge badge-glass me-1">Firebase</span>
                    <span className="badge badge-glass">API</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href="https://ladhahouse.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-glass">
                    <i className="bi bi-box-arrow-up-right icon-dark"></i> Live
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="card glass-card project-card h-100 border-0">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-calculator fs-1 icon-dark"></i>
                  </div>
                  <h5 className="card-title">Payroll Calculator</h5>
                  <p className="card-text">Interactive payroll calculation tool with tax deductions and net pay estimation.</p>
                  <div className="mt-3">
                    <span className="badge badge-glass me-1">JavaScript</span>
                    <span className="badge badge-glass">Bootstrap</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href="https://craigmacharia.github.io/payroll-calculator/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-glass">
                    <i className="bi bi-box-arrow-up-right icon-dark"></i> Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
<div className="section" id="gallery">
  <div className="container">
    <h2 className="text-center mb-5 display-5 fw-bold">
      <i className="bi bi-images me-2 icon-dark"></i>Project Gallery
    </h2>
    <div className="row g-4">
      {/* Image 1 - Replace with your own */}
      <div className="col-6 col-md-3">
        <div className="glass-card rounded-3 overflow-hidden h-100">
          <img 
            src="/code.png"  // Path to your image in public/images folder
            alt="My Project Screenshot 1" 
            className="img-fluid w-100 h-100 object-fit-cover gallery-img"
          />
        </div>
      </div>
      
      {/* Image 2 - Replace with your own */}
      <div className="col-6 col-md-3">
        <div className="glass-card rounded-3 overflow-hidden h-100">
          <img 
            src="/murima.png"  // Path to your image in public/images folder
            alt="My Project Screenshot 2" 
            className="img-fluid w-100 h-100 object-fit-cover gallery-img"
          />
        </div>
      </div>
      
      {/* Image 3 - Replace with your own */}
      <div className="col-6 col-md-3">
        <div className="glass-card rounded-3 overflow-hidden h-100">
          <img 
            src="/land.png"  // Path to your image in public/images folder
            alt="My Project Screenshot 3" 
            className="img-fluid w-100 h-100 object-fit-cover gallery-img"
          />
        </div>
      </div>
      
      {/* Image 4 - Replace with your own */}
      <div className="col-6 col-md-3">
        <div className="glass-card rounded-3 overflow-hidden h-100">
          <img 
            src="/admin.png"  // Path to your image in public/images folder
            alt="My Project Screenshot 4" 
            className="img-fluid w-100 h-100 object-fit-cover gallery-img"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Skills Section */}
      <div className="section bg-dark bg-opacity-75" id="skills">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            <i className="bi bi-tools me-2 icon-dark"></i>Skills & Technologies
          </h2>
          <div className="row g-4 text-center">
            {[
              { icon: 'bi-filetype-html', name: 'HTML', color: 'text-danger' },
              { icon: 'bi-filetype-css', name: 'CSS', color: 'text-primary' },
              { icon: 'bi-filetype-js', name: 'JavaScript', color: 'text-warning' },
              { icon: 'bi-filetype-jsx', name: 'React', color: 'text-info' },
              { icon: 'bi-filetype-py', name: 'Python', color: 'text-success' },
              { icon: 'bi-database', name: 'Django', color: 'text-dark' },
              { icon: 'bi-git', name: 'Git', color: 'text-secondary' },
              { icon: 'bi-bootstrap', name: 'Bootstrap', color: 'text-purple' },
            ].map((skill, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="p-4 glass-card rounded-3 h-100">
                  <i className={`bi ${skill.icon} ${skill.color} fs-1`}></i>
                  <h5 className="mt-3">{skill.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section" id="contact">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            <i className="bi bi-chat-left-text me-2 icon-dark"></i>Get In Touch
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="glass-card p-5 rounded-4">
                <div className="text-center mb-4">
                  <p className="lead">Have a project in mind or want to collaborate?</p>
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                  <a href="mailto:cmacharia482@gmail.com" className="btn btn-dark btn-glass">
                    <i className="bi bi-envelope-fill me-2"></i>Email
                  </a>
                  <a href="https://wa.me/+254755453975" className="btn btn-dark btn-glass" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp me-2"></i>WhatsApp
                  </a>
                  <a href="https://instagram.com/craig.macharia" className="btn btn-dark btn-glass" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram me-2"></i>Instagram
                  </a>
                  <a href="https://github.com/Craigmacharia" className="btn btn-dark btn-glass" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github me-2"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 glass-nav">
        <div className="container text-center">
          <div className="mb-3">
            <a href="#" className="social-icon-glass mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon-glass mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-icon-glass mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="social-icon-glass mx-2">
              <i className="bi bi-github"></i>
            </a>
          </div>
          <small>&copy; {new Date().getFullYear()} Craig Macharia. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Home;