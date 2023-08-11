import React from 'react'
import Social from '../components/Social';
import "./Contact.css";
import SocialInfo from '../components/SocialInfo';
import ScrollEffect from '../components/ScrollEffect';

const Contact = () => {
  return (
    <ScrollEffect fadeType="fade-up">
      <div className='contact-section' id='contact'>
      <div className='title'>
        <h1>Socials</h1>
        <p>You can contact me through following</p>
      </div>
      <ScrollEffect fadeType="fade-in">
      <div className='social'>
        {SocialInfo.map((item) =>(
            <Social
                key = {item.key}
                icon = {item.icon}
                link = {item.link}
                content = {item.content}
               
            />
        )
            
        )}
      </div>
      </ScrollEffect>
    </div>
    </ScrollEffect>
  )
}

export default Contact;
