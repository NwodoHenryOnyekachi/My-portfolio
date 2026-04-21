import React from 'react';
import './Hero.css';
import profile_img from '../../Assets/Henry.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
      <img data-aos="flip-right" data-aos-delay="200" src={profile_img} alt="Profile" />
      <h1 data-aos="zoom-in" data-aos-delay="100">
        <span>I'm Nwodo Henry Onyekachi</span>, frontend developer based in Nigeria.
      </h1>
      <p data-aos="zoom-in" data-aos-delay="100">
        I am from Enugu State and a Computer Engineering graduate. I am willing to explore the world of creativity and solve problems through coding.
      </p>

      <div className='hero-action' data-aos="fade-up" data-aos-delay="100">
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>

        {/* Fixed: Matched the filename case exactly to 'MyResume2.pdf' */}
        <a
          href={process.env.PUBLIC_URL + "/MyResume2.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          download="Nwodo-Henry-Resume"
          className='hero-resume'
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          my resume
        </a>
      </div>
    </div>
  );
}

export default Hero;