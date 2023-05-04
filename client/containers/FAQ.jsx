import React from 'react';
import Collapsible from 'react-collapsible';

export default function FAQ() {
  return (
    <div className="FAQ-container">
      <div className="faq-title">
        <h1>Frequently Asked Questions:</h1>
      </div>
      <Collapsible className='collapsible-tab'
        trigger="Why should I choose KoffeeTable?"
        triggerTagName="h2"
      >
        <p>
          Monitoring the performance of Kafka clusters can be a daunting task,
          especially for first-time users. KoffeeTable selects several powerful
          metrics for you and visualizes them in real-time with an interactice
          GUI, allowing you to easily monitor your running clusters.
          Additionally, KoffeeTable provides the option to test your cluster
          with sample data, as well as add and remove Kafka topics with the
          click of a button.
        </p>
      </Collapsible>
      <Collapsible className='collapsible-tab'
        trigger="Which specific metrics does KoffeeTable track and why?"
        triggerTagName="h2"
      >
        <ol>
          <li>Partition Replicas</li>
          <li>Partition Offsets</li>
          <li>Producer-Consumer Lag Time</li>
          <li>Message Velocity</li>
        </ol>
        <p>
          We chose these metrics with the goal of identifying bottlenecks early,
          optimizing performance, and improving overall reliability of clusters.
          High lag time and/or low message velocity can indicate inefficent
          consumption of data, network issues, or other processing delays, while
          under-replicated partitions or unbalanced partition offsets poses the
          risk of losing valuable data.
        </p>
      </Collapsible>
      <Collapsible className='collapsible-tab'
        trigger="How does KoffeeTable calculate these metrics?"
        triggerTagName="h2"
      >
        <p>
          KoffeeTable uses <a href="https://kafka.js.org/">KafkaJS</a> to pull
          partition replicas and parition offsets. Lag time is calculated by
          taking the average time between message production and consumption
          over a 3 second interval. Message velocity is calculated by counting
          the number of messages added to a partition over a 3 second interval.
        </p>
      </Collapsible>
      <Collapsible className='collapsible-tab'
        trigger="What tech stack does KoffeeTable use?"
        triggerTagName="h2"
      >
        <p>
          KoffeeTable's UI is built with React and uses{' '}
          <a href="https://www.chartjs.org/">Chart.js</a> for data
          visualizations. Additionally, WebSockets were implemented to handle
          the rendering of live data. On the backend, it uses Express as well as
          MongoDB to store user data and cluster information. Finally,
          KoffeeTable is containerized using Docker.
        </p>
      </Collapsible>
    </div>
  );
}
