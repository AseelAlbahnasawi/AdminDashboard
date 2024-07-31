// src/components/DoctorsList.jsx
import React from 'react';
import '../styles/Dashboard/DoctorsList.css';

const DoctorsList = ({ doctors }) => {
  return (
    <div className="doctors-list">
      <h2>Doctors List</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <img src={doctor.avatar} alt={doctor.name} />
            <span>{doctor.name}</span>
            <span>{doctor.specialty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
