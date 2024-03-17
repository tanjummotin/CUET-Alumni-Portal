import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import eventImg from "../assets/murti.jpg";
import "./eventCareer.css";
import { Link } from "react-router-dom";
import Footer from "./footer";

export const EventCardUi = () => {
  const [eventData, setEventData] = useState([]);
  const loggedIn = sessionStorage.getItem("loggedIn");

  useEffect(() => {
    // Fetch event data from PHP script
    fetch("http://localhost/test/fetch_events_data.php") // Adjust the URL accordingly
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching event data:", error));
  }, []);

  // Function to format the date from "YYYY-MM-DD" to "DD Month YYYY"
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className="eventContainer row container-fluid">
        <div className="col-15">
          {loggedIn ? (
            <div className="row justify-content-end mt-3">
              <button
                className="btn btn-primary  custom-button "
                style={{ width: "200px" }}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                <Link to="/eventForm" className="text-white">
                  Add Event
                </Link>
              </button>
            </div>
          ) : (
            <div className="row justify-content-end mt-3">
              <button
                className="btn btn-primary custom-button"
                style={{
                  width: "200px",
                  backgroundColor: "#4CAF50", // Green background color
                  borderRadius: "8px", // Rounded corners
                }}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                <Link
                  to="/login"
                  className="text-white"
                  style={{ textDecoration: "none", fontWeight: "500" }}
                >
                  Add Event
                </Link>
              </button>
            </div>
          )}
          {/* Map through eventData and render each event */}
          {eventData.map((event) => (
            <Box
              key={event.event_id}
              className="mt-4 container text-center shadow rounded custom-box"
            >
              {/* Event details */}
              <div className="row">
                <div
                  className="col-2"
                  style={{ fontSize: "35px", background: "#C9A859" }}
                >
                  <div className="row-cols-1 date" style={{ fontSize: "35px" }}>
                    {formatDate(event.date)}
                  </div>
                </div>
                <div className="col-10 description">
                  <div className="title row-cols-1">{event.title}</div>
                  <div
                    className="title row-cols-1"
                    style={{ fontSize: "15px" }}
                  >
                    {event.event_description}
                  </div>
                  <div className="row mt-5">
                    <div
                      className="col-lg-4 col-12 time"
                      style={{
                        background: "#f0f0f0",
                        padding: "10px",
                        fontWeight: "300",
                      }}
                    >
                      {event.time}
                    </div>
                    <div
                      className="col-lg-4 col-12 place"
                      style={{
                        background: "#f0f0f0",
                        padding: "10px",
                        fontWeight: "300",
                      }}
                    >
                      <span className="label">Location: </span>
                      {event.location}
                    </div>
                    <div
                      className="col-lg-4 col-12 type"
                      style={{
                        background: "#f0f0f0",
                        padding: "10px",
                        fontWeight: "300",
                      }}
                    >
                      <span className="label">Type: </span>
                      {event.online_or_in_person}
                    </div>
                  </div>
                </div>
                {/* Uncomment below to include event image */}
                {/* <div className="col-4 eventPic">
                  <img src={eventImg} alt="Event" />
                </div> */}
              </div>
            </Box>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventCardUi;
