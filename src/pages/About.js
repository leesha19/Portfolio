import React from 'react'
import Cards from '../components/Cards';
import CardsInfo from "../components/CardsInfo";
import ScrollEffect from '../components/ScrollEffect';
import "./About.css";

const About = () => {
  return (
    <ScrollEffect fadeType='fade-up'>
      <div className='about-section' id='about'>
         <div className='title'>
           <h1 >About me </h1>
           <p>I create things from scratch ! and I love what I do </p>
         </div>
      
      
        
          <ScrollEffect fadeType='fade-in'>
           <div>
             <div className='gradient-cards'>
               {CardsInfo.map(cardItem => (
                <Cards
                 key = {cardItem.key}
                 icon = {cardItem.icon}
                 title = {cardItem.title}
                 content = {cardItem.content}
                 links = {cardItem.links}
                />
               ))}
             </div>
            </div>
          </ScrollEffect>
    
      
        </div>
    </ScrollEffect>
  );
};

export default About;
