import React from 'react'
import "./Cards.css";
import { Link } from 'react-scroll';

const Cards = (props) => {
  return (
    <>

   <div className="card">
      <div className="container-card bg-green-box">
        <div className="icon">{props.icon}</div>
        <p className="card-title">{props.title}</p>
        <p className="card-description">{props.content}</p>
        
        <div className='card-links'>
          {props.links && props.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Cards;
