
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const CUETLogo = require('../assets/CUETALUMNI_finall.png');

export default function NavBar1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // You should replace this placeholder with an actual API call to check login status
    // Fetch the data from your server using an API endpoint
    // Example: /api/getLoginStatus
    fetch("http://localhost/test/login_status.php")
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data.isLogged);
        setUserName(data.userName);
      })
      .catch((error) => {
        console.error('Error fetching login status:', error);
      });
  }, []);

  return (
    <nav className="nav2 navbar navbar-expand-lg">
      <div className="d-flex justify-content-evenly container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={CUETLogo} alt="Cuet Logo" width="90" height="40" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link link ps-4 pe-4" to="/alumniDirectory">
              Alumni Directory
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <Link className="nav-link ps-4 pe-4 login-btn" to="/dashboard">
                Welcome, {userName}
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link ps-4 pe-4 login-btn" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
