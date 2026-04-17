import React from 'react'
import './About.css'
import profile_img from '../../Assets/Henry.jpeg'


function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1 data-aos="zoom-in" data-aos-delay="100"  >About me</h1>

        </div>

        <div className="about-section">
            <div className="about-left">
                <img data-aos="zoom-in" data-aos-delay="100"  src={profile_img} alt="" />
            </div>

            <div className="about-right" data-aos="zoom-in" data-aos-delay="100" >
                <div className="about-para">
                    <p>
                        I am a frontend developer passionate about building modern web applications across both Web2 and Web3 ecosystems. I enjoy turning creative ideas into interactive digital experiences using clean and efficient code.
                    </p>

                    <p>
                        Beyond development, I create educational content and write informative threads that highlight innovative projects, helping them gain visibility while simplifying complex technologies for a wider audience.
                    </p>
                </div>

                <div className="about-skills" data-aos="zoom-in" data-aos-delay="100" >
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>React js</p><hr style={{width:"50%"}}/>
                    </div>

                    <div className="about-skill">
                        <p>java script</p><hr style={{width:"50%"}}/>
                    </div>

                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement" data-aos="flip-right" data-aos-delay="100" >
                <h1>3+</h1>
                <p>years of experience</p>
            </div>
            <hr/>
            <div className='about-achievement'data-aos="fade-up" data-aos-delay="100" >
                <h1>4+</h1>
                <p>PROJECT COMPLETED</p>
            </div>

            <hr />
            <div className='about-achievement'data-aos="flip-right" >
                <h1>1+</h1>
                <p>HAPPY CLIENTS</p>
            </div>



        </div>
      
    </div>
  )
}

export default About
