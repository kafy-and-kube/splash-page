import React from 'react';
import Features from '../components/Features.jsx'
import chartImg from '../../assets/graph.png'
import dockerImg from '../../assets/docker.png'
import featherImg from '../../assets/feather.png'
import osLabsImg from '../../assets/oslabs.png'
import koffeetable1 from  '../../assets/koffetable1.jpg'
import koffeetable2 from  '../../assets/koffeetable2.jpg'
import koffeetable3 from  '../../assets/koffeetable3.jpg'
import koffeetable4 from  '../../assets/koffeetable4.jpg'


export default function FeaturesContainer() {
  const header = ["Free & Open Source", 'View Key Metrics', 'Easy to Integrate', 'Lightweight' ]
  const text = ["In collaboration with OSLabs", 'Never worry about under-replicated partitions again', 'All you need is to have your Kafka clusters and Docker running', 'Low CPU usage and minimal memory consumption' ]
  const images = [koffeetable1, koffeetable2, koffeetable3, koffeetable4]
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
