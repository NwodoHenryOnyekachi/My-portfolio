// import React, { useState, useRef } from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import logo from '../../Assets/logo2.png'
// import './Navbar.css'

// function Navbar() {
//   const [menu, setMenu] = useState("home");
//   const menuRef = useRef();


//   const openmenu = () => {
//     console.log("Menu button clicked!"); 
//     if(menuRef.current) {
//       menuRef.current.style.right = "0px";
//       menuRef.current.style.position = "fixed";
//     }
//   }

//   const closeMenu = () => {
//     if(menuRef.current) {
//       menuRef.current.style.right = "-350px";
//     }
//   }

//   return (
//     <div className='navbar'>
//       <img src={logo} alt="logo" />

//       <div className="nav-mob-open" onClick={openmenu}>
//         <MenuIcon />
//       </div>

//       <ul ref={menuRef} className='nav-menu'>
//         <div className="nav-mob-close" onClick={closeMenu}>
//           <CloseIcon />
//         </div>

//         <li>
//           <AnchorLink className='anchor-link' href='#home'>
//             <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
//           </AnchorLink>
//         </li>

//         <li>
//           <AnchorLink className='anchor-link' offset={50} href='#about'>
//             <p onClick={() => { setMenu("about"); closeMenu(); }}>About</p>
//           </AnchorLink>
//         </li>

//         <li>
//           <AnchorLink className='anchor-link' offset={50} href='#services'>
//             <p onClick={() => { setMenu("service"); closeMenu(); }}>Service</p>
//           </AnchorLink>
//         </li>

//         <li>
//           <AnchorLink className='anchor-link' offset={50} href='#work'>
//             <p onClick={() => { setMenu("portfolio"); closeMenu(); }}>Portfolio</p>
//           </AnchorLink>
//         </li>

//         <li>
//           <AnchorLink className='anchor-link' offset={50} href='#contact'>
//             <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
//           </AnchorLink>
//         </li>
//       </ul>
      
//       <div className='nav-connect'>
//         <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../Assets/logo2.png'
import './Navbar.css'

function Navbar() {
  // Fixed: Added an underscore or just left the first slot empty to tell ESLint we aren't using 'menu'
  const [, setMenu] = useState("home");
  const menuRef = useRef();

  const openmenu = () => {
    console.log("Menu button clicked!"); 
    if(menuRef.current) {
      menuRef.current.style.right = "0px";
      menuRef.current.style.position = "fixed";
    }
  }

  const closeMenu = () => {
    if(menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />

      <div className="nav-mob-open" onClick={openmenu}>
        <MenuIcon />
      </div>

      <ul ref={menuRef} className='nav-menu'>
        <div className="nav-mob-close" onClick={closeMenu}>
          <CloseIcon />
        </div>

        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about"); closeMenu(); }}>About</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => { setMenu("service"); closeMenu(); }}>Service</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => { setMenu("portfolio"); closeMenu(); }}>Portfolio</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar