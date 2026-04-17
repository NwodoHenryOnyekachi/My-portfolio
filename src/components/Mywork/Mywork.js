// import React from 'react'
// import profile_img from '../../Assets/FP1.jpeg'
// import second from '../../Assets/fp4.jpeg'
// import Third from '../../Assets/pf3.jpeg'
// import Fouth from '../../Assets/fp5.jpeg'
// import Fifth from '../../Assets/PF2.jpeg'
// import Sixth from '../../Assets/Fp6.jpeg'

// import './Mywork.css'

// function Mywork() {
//   return (
//     <div id='work' className='mywork'>
//         <div className="mywork-title">
//             <h1 data-aos="zoom-in">My Latest Work</h1>
//             <img data-aos="slide-right" data-aos-delay="100" src={profile_img} alt="Work 1"/>
//             <img data-aos="zoom-in" data-aos-delay="100" src={second} alt="Work 2" />
//             <img data-aos="slide-right" data-aos-delay="100" src={Third} alt="Work 3" />
//             <img data-aos="slide-left" data-aos-delay="100" src={Fouth} alt="Work 4" />
//             <img data-aos="zoom-in" data-aos-delay="100" src={Fifth} alt="Work 5" />
//             <img data-aos="slide-left" data-aos-delay="100" src={Sixth} alt="Work 6" />
//         </div>
//     </div>
//   )
// }

// export default Mywork


import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx'; 

// IMPORTANT: Ensure these paths are correct based on your folder structure
import profile_img from '../../Assets/FP1.jpeg';
import second from '../../Assets/fp4.jpeg';
import Third from '../../Assets/pf3.jpeg';
import Fouth from '../../Assets/fp5.jpeg';
import Fifth from '../../Assets/PF2.jpeg';
import Sixth from '../../Assets/Fp6.jpeg';

import './Mywork.css';

function Mywork() {
  const [selectedImg, setSelectedImg] = useState(null);

  // We define the array INSIDE the function so it can see the imports above
  const images = [
    { src: profile_img, alt: "Work 1", aos: "slide-right" },
    { src: second, alt: "Work 2", aos: "zoom-in" },
    { src: Third, alt: "Work 3", aos: "slide-right" },
    { src: Fouth, alt: "Work 4", aos: "slide-left" },
    { src: Fifth, alt: "Work 5", aos: "zoom-in" },
    { src: Sixth, alt: "Work 6", aos: "slide-left" },
  ];

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1 data-aos="zoom-in">My Latest Work</h1>
        <div className="mywork-container">
          {images.map((img, index) => (
            <img 
              key={index}
              data-aos={img.aos}
              data-aos-delay="100"
              src={img.src} 
              alt={img.alt}
              onClick={() => setSelectedImg(img.src)} 
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Bold View */}
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} alt="Enlarged view" />
            <RxCross1 
                className="lightbox-exit-icon" 
                onClick={() => setSelectedImg(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Mywork;