import React from 'react';
import logo from '../../assets/IconOnly_Transparent_NoBuffer.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-button">
          <img id="logo" src={logo} alt="koffeetable-logo" />
        </button>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Docs</button>
        <button id="download-button" className="navbar-button">
          Download
        </button>
      </div>
    </nav>
  );
}
