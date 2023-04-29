import React from 'react';
import Features from '../components/Features.jsx'

export default function FeaturesContainer() {
  const text = ["Free and open source", 'View Key Metrics', 'Easy to integrate', 'Lightweight', 'Sample 5', 'Sample 6' ]
  const features = []
  for (let i = 0; i < 6; i++) {
    features.push(<Features key={i} text={text[i]} />)
  }
  return (
    <div>
      <div id='features-wrapper'>
        <h1> Begin visualizing your clusters in minutes </h1>
      </div>
      <div id="features"> 
        {features}
      </div>
    </div>
  );
}
