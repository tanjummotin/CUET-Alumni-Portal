import React from "react";
import CardsData from "./AlumniCardData";
import male from "../assets/manavatar.jpg";
import female from "../assets/womanavatar.jpg";
import "./Cardstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faMapMarkerAlt,
  faTint,
} from "@fortawesome/free-solid-svg-icons";

import { FaRegStar } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
export const CardUi = (props) => {
  return (
    <>
      <div className="card alumniCard" style={{ backgroundColor: "#e6e6ff" }}>
        <div className="row">
          <div className="col-3 card-body  justify-content-center align-items-center m-auto">
            {props.gender == "Female" ? (
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
          <div className="col-6 card-body">
            <div>
              <strong>{props.name}</strong>
              <br></br>
              <p className="text-secondary">
                {props.present_position},{props.organization}
              </p>
            </div>
            <div className="col-8">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <FontAwesomeIcon icon={faTint} /> {props.blood_group}
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> {props.email}
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {props.present_address}
                </li>
              </ul>
            </div>
            {/* <Link
              to="\profileView"
              className="btn btn-primary btn-sm mt-1 ViewBtn"
            >
              View Details
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
