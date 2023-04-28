import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar.jsx';
import HookContainer from './containers/HookContainer.jsx';
import DemoContainer from './containers/DemoContainer.jsx';
import FeaturesContainer from './containers/FeaturesContainer.jsx'
import pika from '../assets/pika.jpg' 

export default function App() {
  return (
    <div id='main'>
      <Navbar />
      <HookContainer />
      <DemoContainer src={pika} alt='a demo of KoffeeTable app'/>
      <FeaturesContainer />
    </div>
  );
}
