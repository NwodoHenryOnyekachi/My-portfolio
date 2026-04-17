import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Mywork from './components/Mywork/Mywork';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  
      mirror: true,
    });
  }, []);

  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}

export default App;
