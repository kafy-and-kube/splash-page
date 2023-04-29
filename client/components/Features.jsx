import React from 'react';

export default function Features({ header, text, image }) {
  return (
    <div className='feature-box'>
      <img src={image}></img>
      <h1>{header}</h1>
      <h3>{text}</h3>
    </div>
  );
}
