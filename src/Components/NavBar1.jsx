
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const CUETLogo = require('../assets/CUETALUMNI_finall.png');
export default function NavBar1() {
 
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const username = userData?.username;
  const loggedIn = sessionStorage.getItem("loggedIn");



  // useEffect(() => {
  //   // You should replace this placeholder with an actual API call to check login status
  //   // Fetch the data from your server using an API endpoint
  //   // Example: /api/getLoginStatus
  //   fetch("http://localhost/test/login_status.php")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsLoggedIn(data.isLogged);
  //       setUserName(data.userName);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching login status:', error);
  //     });
  // }, []);
  const handleLogout = () => {
    // Perform logout actions here, such as clearing session storage
    sessionStorage.clear();
    console.log(loggedIn);
    // You can also redirect the user to the login page or any other page
     window.location.href = "/"; // Example redirect to the login page

  };
  return (
    <nav className="nav2 navbar navbar-expand-lg">
      <div className="d-flex justify-content-evenly container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={CUETLogo} alt="Cuet Logo" width="90" height="40" />
        </Link>
        <ul className="navbar-nav">

          {loggedIn ? (

            <li className="nav-item">
            <Link className="nav-link link ps-4 pe-4" to="/alumniDirectory">
              Alumni Directory
            </Link>
          </li>
          ) : (
            <li className="nav-item">
            <Link className="nav-link link ps-4 pe-4" to="/login">
              Alumni Directory
            </Link>
          </li>
          )}
          {loggedIn ? (
            <>
            <li className="nav-item">
             <Link className="nav-link ps-4 pe-4 login-btn" to="/">
                Welcome, {username}
              </Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-link nav-link ps-4 pe-4 login-btn" onClick={handleLogout} >
                  Logout
                </Link>
              </li>
            </>


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
