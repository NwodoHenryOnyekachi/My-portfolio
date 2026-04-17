import React from 'react';
import './Services.css';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleIcon from '@mui/icons-material/People';
import PsychologyIcon from '@mui/icons-material/Psychology';

function Services() {
  return (
    <section id='services' className="services">
      <div className="services-title">
        <h1 data-aos="fade-down" data-aos-delay="100">My Services</h1>
      </div>

      <div className="services-container">
        <div className="service-card" data-aos="slide-right" data-aos-delay="80">
          <span className="service-icon">
            <CodeIcon />
          </span>
          <h2>Web Design</h2>
          <p>
            I develop Web3 websites, static and dynamic websites, personal
            portfolios, business/corporate websites, e-commerce platforms,
            educational websites, blogs, news/media sites, social media and
            entertainment websites.
          </p>
        </div>

        <div className="service-card" data-aos="slide-left" data-aos-delay="80">
          <span className="service-icon">
            <PeopleIcon />
          </span>
          <h2>Content Creator</h2>
          <p>
            I create educational and explanatory(Thread) content for cryto/tech projects through
            writing and video creation.
          </p>
        </div>

        <div className="service-card" data-aos="zoom-in" data-aos-delay="80">
          <span className="service-icon">
            <LanguageIcon />
          </span>
          <h2>Social Media Manager</h2>
          <p>
            I manage tech-focused and Web3 social media accounts to grow
            engagement and visibility.
          </p>
        </div>

        <div className="service-card" data-aos="zoom-in" data-aos-delay="80">
          <span className="service-icon">
            <PsychologyIcon />
          </span>
          <h2>AI Trainer</h2>
          <p>
            Bridging the gap between humans and machines by training AI models to understand context, nuance, and complex instructions more effectively.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
