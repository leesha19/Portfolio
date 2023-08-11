import React from 'react'
import Carousel from '../components/Carousel';
import CarouselInfo from '../components/CarouselInfo';
import ScrollEffect from '../components/ScrollEffect';
import "./Projects.css";


const Projects = () => {
  return (
    <ScrollEffect fadeType="fade-up">
     <div className='project-section' id='projects'>
       <div className='title'>
         <h1>Projects</h1>
       </div>
        
        <ScrollEffect fadeType="fade-in">
        <div className='flip-container'>
         {CarouselInfo.map(cardItem => (
             <Carousel
                key = {cardItem.key}                
               title = {cardItem.title}
               imageUrl = {cardItem.imageUrl}
               link={cardItem.link}
               head = {cardItem.head}
               content = {cardItem.content}
              />
             ))}
       </div>
        </ScrollEffect>
      </div>
    </ScrollEffect>
  )
}

export default Projects;
