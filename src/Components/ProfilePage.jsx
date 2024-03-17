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
import Footer from "./footer";

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
      <div className="container py-4">
        {/* Profile Info */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card shadow rounded border-0">
              <div className="card-body d-flex align-items-center">
                <div className="col-3">
                  <img
                    src={gender === "Female" ? female : male}
                    className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    alt="Avatar"
                  />
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="fw-bold">{name}</li>
                    <li>
                      {present_position}, {organization}
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul className="list-unstyled">
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
              </div>
            </div>
          </div>
        </div>

        {/* Education Info */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <div className="card shadow rounded border-0">
              <div className="card-body">
                <h5
                  className="card-title mb-4"
                  style={{ backgroundColor: "#f0f0f0", padding: "6px" }}
                >
                  Education
                </h5>
                <p className="card-text">{recent_degree}</p>
                <p className="card-text">{university_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
