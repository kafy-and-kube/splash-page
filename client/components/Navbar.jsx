import React from 'react';
import logo from '../../assets/IconOnly_Transparent_NoBuffer.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to='/'>
          <button className='navbar-button'>
            <img id='logo' src={logo} alt='koffeetable-logo' />
          </button>
        </Link>
      </div>
      <div className='navbar-right'>
        <button
          onClick={() => {
            window.open('https://github.com/oslabs-beta/Koffee-Table');
          }}
          className='navbar-button'
        >
          Docs
        </button>
        <button id='download-button' className='navbar-button'>
          Download
        </button>
      </div>
    </nav>
  );
}
