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
        <Link className='navbar-button aboutus' to='/aboutus'>
          Our Team
        </Link>
        <button
          onClick={() => {
            window.open('https://www.linkedin.com/company/koffeetable/?viewAsMember=true');
          }}
          className='navbar-button'
        >
          LinkedIn
        </button>
        <button
          onClick={() => {
            window.open('https://github.com/oslabs-beta/Koffee-Table');
          }}
          className='navbar-button'
        >
          Docs
        </button>
      </div>
    </nav>
  );
}
