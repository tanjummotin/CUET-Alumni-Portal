import React, { useState, useEffect } from 'react';

const AlumniList = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    // Fetch alumni data from PHP script
    fetch("http://localhost/test/fetch_alumni_data.php")
      .then(response => response.json())
      .then(data => setAlumniData(data))
      .catch(error => console.error('Error fetching alumni data:', error));
  }, []);

  return (
    <div>
      <h1>Alumni List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            {/* Add more table headers for other columns */}
          </tr>
        </thead>
        <tbody>
        {alumniData.map(alumni => (
  <tr key={alumni.id}>
    <td>{alumni.id}</td>
    <td>{alumni.name}</td>
    <td>{alumni.date_of_birth}</td>
    <td>{alumni.blood_group}</td>
    <td>{alumni.department}</td>
    <td>{alumni.batch}</td>
    <td>{alumni.present_position}</td>
    <td>{alumni.organization}</td>
    <td>{alumni.present_address}</td>
    <td>{alumni.phone_no}</td>
    <td>{alumni.email}</td>
    <td>{alumni.gender}</td>
    <td>{alumni.linkedIn_profile_link}</td>
    <td>{alumni.recent_degree}</td>
    <td>{alumni.university_name}</td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
};

export default AlumniList;
