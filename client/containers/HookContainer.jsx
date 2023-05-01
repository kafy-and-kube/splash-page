import React from 'react';

export default function HookContainer() {
  return (
    <div id='hook'>
      <h1>
        KoffeeTable brings your Apache Kafka visualization needs to the table
      </h1>
      <h2>Integrate and visualize your Apache Kafka clusters</h2>
      <div className='buttons-container'>
        <button
          onClick={() => {
            window.open('https://github.com/oslabs-beta/Koffee-Table')
          }}
          id='koffeetable-btn'
        >
          Get KoffeeTable
        </button>
        <button id='learnmore-btn'>Learn more</button>
      </div>
    </div>
  );
}
