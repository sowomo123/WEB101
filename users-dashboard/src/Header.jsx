import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1> User Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact">Qualification</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;