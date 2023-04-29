import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar.jsx';
import HookContainer from './containers/HookContainer.jsx';
import DemoContainer from './containers/DemoContainer.jsx';
import FeaturesContainer from './containers/FeaturesContainer.jsx'
import FAQ from './containers/FAQ.jsx'

export default function App() {
  return (
    <div id='main'>
      <Navbar />
      <HookContainer />
      <DemoContainer />
      <FeaturesContainer />
      <FAQ />
    </div>
  );
}
