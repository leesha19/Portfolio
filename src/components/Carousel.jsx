import React from 'react'
import "./Carousel.css";


const Carousel = ({imageUrl, title , link,head,content}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='flip'>
      <div className='front' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="front-content">
          <h1 className="text-shadow">{title}</h1>
        </div>
      </div>
      <div className="back">
        <h2>{head}</h2>
        <p>{content}</p>
      </div>
    </a>
  )
}

export default Carousel;
