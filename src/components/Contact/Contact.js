import React from 'react'
import './Contact.css'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1 data-aos="fade-up" data-aos-delay="100">Get in touch</h1>
        </div>
        <div className='contact-secrtion'>
          <div className='contact-left' data-aos="slide-right" data-aos-delay="100">
            <h1>let's talk</h1>
            <p>
                I am currently available for any project. Feel free to reach out if you'd like to collaborate and bring your ideas to life.
            </p>

            <div className="contact-details">
                <div className="contact-detail">
                    <ContactMailIcon />
                    <p>onyekachihenrynwodo@mail.com</p>
                 </div>

              <div className="contact-detail">
                    <AddIcCallIcon />
                    <p>+1234 9050-453-446</p>
               </div>

               <div className="contact-detail">
                     <LocationOnIcon />
                    <p>Umuahia, Nigeria</p>
                </div>
              
            </div>
          </div>

          <form data-aos="flip-left" data-aos-delay="100" action="https://formspree.io/f/xjgejdpo" method='POST' className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="Email" placeholder='Enter Your email' name='email'  />
            <label htmlFor="">Write Your message here</label>
            <textarea name="messages" rows="8" placeholder='Enter Your messages'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
          </form>

        </div>
    </div>
  )
}

export default Contact
