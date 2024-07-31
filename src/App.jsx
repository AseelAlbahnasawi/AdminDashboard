// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <div className="App">
        <Dashboard /> {/* Include the Dashboard component here */}
      </div>
    </>
  );
}

export default App;
