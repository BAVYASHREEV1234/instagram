
import React from 'react';

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="header">
      <h1>Instagram Clone</h1>
      <button onClick={toggleDarkMode}>🌙 Dark Mode</button>
    </header>
  );
};

export default Header;