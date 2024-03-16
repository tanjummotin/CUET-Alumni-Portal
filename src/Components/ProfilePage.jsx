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
import male from "../assets/manavatar.jpg";
import female from "../assets/womanavatar.jpg";

export default function Profile(second) {
 
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const username = userData?.username;
  const name = userData?.name;
  const email = userData?.email;
  const present_position = userData?.present_position;
  const organization = userData?.organization;
  const blood_group = userData?.blood_group;
  const present_address = userData?.present_address;
  const recent_degree = userData?.recent_degree;
  const university_name = userData?.university_name;
  const gender = userData?.gender;
  const loggedIn = sessionStorage.getItem("loggedIn");


 

  return (
    <>
      <div className="container">
        {/* <div className=" justify-content-end mb-3 w-25">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faEdit} className="mr-1" />
            Edit Profile
          </button>
        </div> */}

          <div  className="col-md-10 mb-3">
            <div className="container mt-3">
              <div className="row shadow rounded border-0 p-3">
                <div className="col-3">
                  {gender == "Female" ? (
                    <img
                      src={female}
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                  ) : (
                    <img
                      src={male}
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                  )}
                </div>
                <div className="col-6">
                  <ul style={{ listStyleType: "none" }}>
                    <li>{name}</li>
                    <li>
                      {present_position},{organization}
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <FontAwesomeIcon icon={faTint} /> {blood_group}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} /> {email}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                      {present_address}
                    </li>
                  </ul>
                </div>
                {/* <div>
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
                </div> */}
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="card shadow rounded border-0 ">
                    <div className="card-body">
                      <h5
                        className="card-title p-3"
                        style={{ backgroundColor: "#f0f0f0" }}
                      >
                        Education
                      </h5>

                      <p className="card-text">{recent_degree}</p>
                      <p>{university_name}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
);
                  }