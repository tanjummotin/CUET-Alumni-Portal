import React, { useState, useEffect } from 'react';

const EventList = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Fetch event data from PHP script
    fetch("http://localhost/test/fetch_events_data.php") // Adjust the URL accordingly
      .then(response => response.json())
      .then(data => setEventData(data))
      .catch(error => console.error('Error fetching event data:', error));
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      <table>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Online or In-person</th>
            <th>Location</th>
            <th>Event Description</th>
            {/* Add more table headers for other columns if needed */}
          </tr>
        </thead>
        <tbody>
          {eventData.map(event => (
            <tr key={event.event_id}>
              <td>{event.event_id}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.type}</td>
              <td>{event.online_or_in_person}</td>
              <td>{event.location}</td>
              <td>{event.event_description}</td>
              {/* Add more table cells for other columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
