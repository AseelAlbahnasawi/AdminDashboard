// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import DoctorsList from '../components/DoctorsList';
import '../styles/Dashboard/Dashboard.css';
 
const Dashboard = () => {
  const stats = [
    { title: 'Total Doctors', value: '120', icon: '👨‍⚕️' },
    { title: 'Total Staff', value: '533', icon: '👥' },
    { title: 'Waiting Data Requests', value: '16', icon: '📊' },
    { title: 'Canceled Appointments', value: '0', icon: '❌' },
    { title: 'Active Patients', value: '332', icon: '👥' },
  ];
 
  const dataRequests = [
    { datatype: 'X-ray report', id: '1234', doctor: 'Dr. Ali Hasan Ali', patientname: 'Ali Ahmad Hasan Al-Mulhim', datastored: 'on chain' },
    { datatype: 'Dental chart', id: '1234', doctor: 'Dr. Ali Hasan Ali', patientname: 'Ali Ahmad Hasan Al-Mulhim', datastored: 'off chain' },
    { datatype: 'Doctor Diagnosis', id: '1234', doctor: 'Dr. Ali Hasan Ali', patientname: 'Ali Ahmad Hasan Al-Mulhim', datastored: 'on chain' },
  ];
 
  const notifications = [
    { message: 'New treatment', token: '1234', department: 'Cosmetic dentistry', status: 'Active' },
    { message: 'Registered', token: '552', department: 'Dental health', status: 'Active' },
    { message: 'New Suppliers Added to system', token: '33', department: 'Cosmetic Center', status: 'Active' },
  ];
 
  const doctors = [
    { name: 'Dr. Aron Alezard', specialty: 'Dentist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. Gray Troutman', specialty: 'Orthodontist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. serena Van Der', specialty: 'Dentist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. Blair Waldorf', specialty: 'Orthodontist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. Dan Humphry', specialty: 'Dentist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. Vanessa Apson', specialty: 'Orthodontist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. Lili Bass', specialty: 'Dentist', avatar: 'https://via.placeholder.com/40' },
    { name: 'Dr. Rufus Humphry', specialty: 'Orthodontist', avatar: 'https://via.placeholder.com/40' },
  ];
 
  return (
<div className="dashboard">
<Sidebar />
<main className="main-content">
<Header />
<div className="stats-container">
          {stats.map((stat, index) => (
<StatCard key={index} {...stat} />
          ))}
</div>
<div className="action-buttons">
<button className="add-doctor">Add new Doctor</button>
<button className="add-patient">Add new Patient</button>
</div>
<div className="data-tables">
<DataTable 
            title="New Data Requests" 
            data={dataRequests} 
            columns={['Data Type', 'ID', 'Doctor', 'Patient name', 'Data Stored']} 
          />
<DataTable 
            title="Main Notifications" 
            data={notifications} 
            columns={['Message', 'Token', 'Department', 'Status']} 
          />
</div>
<DoctorsList doctors={doctors} />
</main>
</div>
  );
};
 
export default Dashboard;
