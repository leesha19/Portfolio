import React from 'react'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ScrollEffect from '../components/ScrollEffect';
import "./Home.css";

const Home = () => {
  return (
    <>
     <div className='hero' id='home'>
       <div class="container">
          <ScrollEffect fadeType='fade-left'>
          <div class="box">
           <div class="spin-container">
             <div class="shape">
               <div class="bd"></div>
             </div>
           </div>
         </div>
          </ScrollEffect>
       </div>
       
          <ScrollEffect fadeType='fade-right'>
          <div className='text '>
             <h1>hey !! there <br/> I Am <span className='name'>Leesha Vani </span> 
               <br/> <span>Frontend developer</span> & <span className='freelancer'>freelancer</span>
              </h1>
           </div>
          </ScrollEffect>

      </div>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
    
  );
};

export default Home;
