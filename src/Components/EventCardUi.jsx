import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import eventImg from "../assets/murti.jpg";
import "./eventCareer.css";

export const EventCardUi = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Fetch event data from PHP script
    fetch("http://localhost/test/fetch_events_data.php") // Adjust the URL accordingly
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching event data:", error));
  }, []);

  return (
    <>
      <div className="eventContainer row container-fluid">
        <div className="col-3 eventType">
          {" "}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="online"
            />
            <label className="form-check-label" htmlFor="online">
              Online
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="inperson"
            />
            <label className="form-check-label" htmlFor="inperson">
              Inperson
            </label>
          </div>
          <br />
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="social"
            />
            <label className="form-check-label" htmlFor="social">
              Social
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="learn"
            />
            <label className="form-check-label" htmlFor="learn">
              Learn
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="service"
            />
            <label className="form-check-label" htmlFor="service">
              Service
            </label>
          </div>
        </div>
        <div className="col-9">
          <div className="row justify-content-end mt-3">
            <button className="btn btn-primary w-25">
              <FontAwesomeIcon icon={faPlus} className="mr-1" />
              Add Event
            </button>
          </div>
          {/* Map through eventData and render each event */}
          {eventData.map((event) => (
            <Box
              key={event.event_id}
              className="mt-4 container text-center shadow rounded"
            >
              {/* Event details */}
              <div className="row">
                <div className="col-2">
                  <div className="row-cols-1 date">{event.date}</div>
                  <div className="row-cols-1 month">{event.month}</div>
                </div>
                <div className="col-6 description">
                  <div className="title row-cols-1">{event.title}</div>
                  <div className="title row-cols-1">
                    {event.event_description}
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-4 col-12 time">{event.time}</div>
                    <div className="col-lg-4 col-12 place">
                      {event.location}
                    </div>
                    <div className="col-lg-4 col-12 type">
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
    </>
  );
};
export default EventCardUi;