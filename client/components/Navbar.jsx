import React from 'react' 

export default function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <button className="navbar-button">Home</button>
          </div>
          <div className="navbar-right">
            <button className="navbar-button">Docs</button>
            <button className="navbar-button">Download</button>
          </div>
        </nav>
      );
}