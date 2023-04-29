import React from 'react';
import Features from '../components/Features.jsx'
import chartImg from '../../assets/graph.png'
import dockerImg from '../../assets/docker.png'
import featherImg from '../../assets/feather.png'
import osLabsImg from '../../assets/oslabs.png'


export default function FeaturesContainer() {
  const header = ["Free & Open Source", 'View Key Metrics', 'Easy to Integrate', 'Lightweight' ]
  const text = ["In collaboration with OSLabs", 'Never worry about under-replicated partitions again', 'All you need is to have your Kafka clusters running and Docker running', 'Low CPU usage and minimal memory consumption' ]
  const images = [osLabsImg, chartImg, dockerImg, featherImg]
  const features = []
  for (let i = 0; i < 4; i++) {
    features.push(<Features key={i} header={header[i]} text={text[i]} image={images[i]}/>)
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
