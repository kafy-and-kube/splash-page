import { useState, useEffect } from 'react';
import React from 'react';
import iframe from 'react-iframe';

export default function DemoContainer() {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    function updateIframeHeight() {
      const wrapper = document.getElementById('iframe-wrapper');
      const height = (wrapper.offsetWidth * 1) / 2.1; /* 16:9 aspect ratio */
      setIframeHeight(height);
    }

    window.addEventListener('resize', updateIframeHeight);
    updateIframeHeight();

    return () => window.removeEventListener('resize', updateIframeHeight);
  }, []);

  return (
    <div id='iframe-wrapper'>
      <iframe
        src='https://app.supademo.com/embed/N9IPKGRyBEPlkPCes6YgA'
        id='i-frame'
        height={iframeHeight + 'px'}
        display='initial'
        position='relative'
        width='90%'
      ></iframe>
    </div>
  );
}