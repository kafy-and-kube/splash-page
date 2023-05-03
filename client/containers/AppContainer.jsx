import React from 'react';
import HookContainer from './HookContainer.jsx';
import DemoContainer from './DemoContainer.jsx';
import FeaturesContainer from './FeaturesContainer.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';

export default function AppContainer() {
  return (
    <div id='app'>
      <HookContainer />
      <DemoContainer />
      <FeaturesContainer />
      <FAQ />
      <Footer />
    </div>
  );
}
