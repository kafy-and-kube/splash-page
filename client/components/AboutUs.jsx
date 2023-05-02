import React from 'react';
import Profile from './Profile.jsx'

export default function AboutUs() {
  const names = ['Gavin', 'Jonas', 'Joe', 'Jonathan', 'Matthew']
  const photos= []


  const profiles = []
  for (let i = 0; i < names.length; i++) {
    profiles.push(<Profile photo={photos[i]} name={names[i]}/>)
  }

  return (
    <div className='about-us'>
      {profiles}
    </div>
  );
}
