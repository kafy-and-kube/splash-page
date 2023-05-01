import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import AppContainer from './containers/AppContainer.jsx';

export default function App() {
  return (
    <div id='main'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<AppContainer />}></Route>
        <Route exact path='/aboutus' element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}
