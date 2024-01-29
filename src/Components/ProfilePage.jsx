import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faTint,
  faPlus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FaE, FaEnvelope } from "react-icons/fa6";

export default function Profile(second) {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    // Fetch alumni data from PHP script
    fetch("http://localhost/test/fetch_alumni_data.php")
      .then((response) => response.json())
      .then((data) => setAlumniData(data))
      .catch((error) => console.error("Error fetching alumni data:", error));
  }, []);
  return (
    <>
      <div className="container">
        <div className=" justify-content-end mb-3 w-25">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faEdit} className="mr-1" />
            Edit Profile
          </button>
        </div>

        <div className="container mt-3">
          <div className="row shadow rounded border-0 p-3">
            <div className="col-3">
              <img src="" alt="" />
            </div>
            <div className="col-6">
              <ul style={{ listStyleType: "none" }}>
                <li>Name</li>
                <li>Present Position , Organization</li>
              </ul>
            </div>
            <div className="col-3">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <FontAwesomeIcon icon={faTint} /> Blood Group
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Present Address
                </li>
              </ul>
            </div>
            <div>
              Connect with me
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={FaEnvelope} />
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card shadow rounded border-0 ">
                <div className="card-body">
                  <h5
                    className="card-title p-3"
                    style={{ backgroundColor: "#f0f0f0" }}
                  >
                    Expreience
                  </h5>

                  <p className="card-text">Present Designation</p>
                  <p>Organization</p>
                  <p>Working Year</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow rounded border-0 ">
                <div className="card-body">
                  <h5
                    className="card-title p-3"
                    style={{ backgroundColor: "#f0f0f0" }}
                  >
                    Education
                  </h5>

                  <p className="card-text">Msc in Department</p>
                  <p>University name</p>
                  <p>Education span</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
