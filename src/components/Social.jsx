import React from 'react';


const Social = (props) => {

  return (
    <div className='circles' >
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
      {props.icon}
      </a>
      <div className='circle-content'>{props.content}</div>
    </div>
  )
}

export default Social;
