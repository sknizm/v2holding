import React, { useState, useEffect } from 'react';
import './Admin.css';
import AdminMenu from '../../Components/AdminMenu/AdminMenu';
import AllPropertyList from '../../Components/AllPropertyList/AllPropertyList';
import EnquiryList from '../../Components/EnquiryList/EnquiryList';
import AddProperty from '../../Components/AddProperty/AddProperty';
import EnquiryDetail from '../../Components/EnquiryDetail/EnquiryDetail';

const Admin = () => {
  const [menu, setMenu] = useState('properties');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    const correctUsername = 'admin';
    const correctPassword = 'V2HoldingsAug2024';
    
    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');  // Save authentication status
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');  // Remove authentication status
  };

  const renderContent = () => {
    switch (menu) {
      case 'properties':
        return <AllPropertyList setMenu={setMenu} />;
      case 'enquiry':
        return <EnquiryList setMenu={setMenu} />;
      case 'add-property':
        return <AddProperty setMenu={setMenu} />;
      case 'enquiry-details':
        return <EnquiryDetail />;
      default:
        return <div>Select an option from the menu</div>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="admin">
      
      <AdminMenu handleLogout={handleLogout} menu={menu} setMenu={setMenu} />
      <div className="side-panel">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
