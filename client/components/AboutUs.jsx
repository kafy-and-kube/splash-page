import React, { useEffect } from 'react';
import Profile from './Profile.jsx';
import Gavin from '../../assets/gavin.png'
import Joe from '../../assets/joe.png'
import Jonathan from '../../assets/jonathan.png'
import Matt from '../../assets/matt(1).png'
import Jonas from '../../assets/jonas.png'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const names = ['Gavin Briggs-Perez', 'Jonas Gantar', 'Joe Ostrow', 'Jonathan Valdes', 'Matthew Lee']
  const photos= [Gavin, Jonas, Joe, Jonathan, Matt]
  const githubs = ['https://github.com/gavinBP', 'https://github.com/TJonasT', 'https://github.com/JSTRO', 'https://github.com/jonathanvaldes57', 'https://github.com/Mattholee']
  const linkedIns = ['https://www.linkedin.com/in/gavinBP/', 'https://www.linkedin.com/in/jonas-gantar/', 'https://www.linkedin.com/in/joseph-ostrow/', 'https://www.linkedin.com/in/jonathan-valdes57/', 'https://www.linkedin.com/in/mattyhlee/']

  const profiles = []
  for (let i = 0; i < names.length; i++) {
    profiles.push(<Profile photo={photos[i]} name={names[i]} github={githubs[i]} linkedIn={linkedIns[i]}/>)
  }

  return (
    <div className='about-us'>
      {profiles}
    </div>
  );
}
