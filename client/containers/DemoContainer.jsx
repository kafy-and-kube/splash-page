import React from 'react';

export default function DemoContainer({src, alt}) {
  return (
    <div id='image-wrapper'>
        <img src={src} alt={alt}/>
    </div>
  );
}