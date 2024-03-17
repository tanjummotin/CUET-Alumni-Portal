import React, { useState, useEffect } from 'react';

function Fetching() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('fetching.php');
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetching;
