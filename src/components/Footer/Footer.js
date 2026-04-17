import React from 'react';
import './Footer.css';
import PeopleIcon from '@mui/icons-material/People';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

function Footer() {
  const socialLinks = [
    { icon: <FacebookIcon />, url: "https://www.facebook.com/profile.php?id=100068294182697" },
    { icon: <GitHubIcon />, url: "https://github.com/NwodoHenryOnyekachi" },
    { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/henry-nwodo-46864227b" },
    { icon: <XIcon />, url: "https://x.com/emma_akpanitoro" },
  ];

  return (
    <div className='footr' data-aos="fade-up" data-aos-delay="80">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            It has been a great time exploring 
            different designs on this internet full of new ideas that need to be brought to reality.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <PeopleIcon />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@2026 Nexus all rights reserved</p>

        <div className='socialicon'>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-bootom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;