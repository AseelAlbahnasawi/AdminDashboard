// src/components/Header.js
import React from 'react';
import '../styles/Dashboard/Header.css';
 
const Header = () => {
  return (
<header className="header">
<div className="search-bar">
<input type="text" placeholder="Looking for something..." />
<button>🔍</button>
</div>
<div className="user-info">
<span>Amal Ahmad</span>
<button>🔔</button>
</div>
</header>
  );
};
 
export default Header;
