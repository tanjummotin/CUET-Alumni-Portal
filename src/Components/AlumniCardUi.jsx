import React from "react";
import CardsData from "./AlumniCardData";
import male from "../assets/manavatar.jpg";
import female from "../assets/womanavatar.jpg";
import "./Cardstyle.css";

import { FaRegStar } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
export const CardUi = (props) => {
  return (
    <>
      <div className="card alumniCard">
        <div className="row">
          <div className="col-3 card-body  justify-content-center align-items-center m-auto">
            {props.gender == "Woman" ? (
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
            {/* <div className="ratings text-center mt-2">
              <p className="font-weight-light">
                <FaRegStar style={{ fill: "#0F1A43" }} /> {props.rating}
                <span className="mx-2"></span>
                <GoProjectRoadmap style={{ fill: "#0F1A43" }} />
                {props.project}
              </p>

              <i className="icofont-star text-warning fs-4"></i>
            </div> */}

            <p>
              {props.present_position},{props.organization}
            </p>
          </div>
          <div className="col-9 card-body">
            <div className="row">
              <div className="row-cols-1">{props.name}</div>
              <div className="row-cols-1">{props.email}</div>
              <div className="row-cols-1">{props.blood_group}</div>
              <div className="row-cols-1">{props.present_address}</div>
            </div>

            <div className="video-setting-icon mt-3 pt-3 border-top">
              <p>{props.about}</p>
            </div>
            <a href="#" className="btn btn-primary btn-sm mt-1 ViewBtn">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
