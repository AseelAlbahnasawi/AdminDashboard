// src/components/Sidebar.js
import React from 'react';
import '../styles/Dashboard/Sidebar.css';
 
const Sidebar = () => {
  return (
<nav className="sidebar">
<div className="logo">BC dentistry</div>
<ul>
<li>Dashboard</li>
<li>Data Sharing</li>
<li>Patients</li>
<li>Doctors</li>
<li>Data Requests</li>
<li>Appointments</li>
<li>Setting</li>
<li>About</li>
</ul>
</nav>
  );
};
 
export default Sidebar;
 