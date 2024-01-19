import React from "react";

import { Box } from "@mui/system";
import NavBar2 from "./NavBar2";
import NavBar1 from "./NavBar2";
import { Grid } from "@mui/material";
import "./eventCareer.css";
import eventImg from "../assets/murti.jpg";

export const EventCardUi = (props) => {
  return (
    <>
      <div className="eventContainer row container-fluid">
        <div className="col-3 eventType">
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
          <Box className="mt-4 container text-center">
            <div className="row">
              <div className="col-2">
                <div className="row-cols-1 date">21</div>
                <div className="row-cols-1 month">September</div>
              </div>
              <div className="col-6 description">
                <div className="title row-cols-1">Reunion of Alumni </div>
                <div className="row mt-5">
                  <div className="col-lg-6 col-12 time">7.30-9.30</div>
                  <div className="col-lg-6 col-12 place">CUET Auditorium</div>
                </div>
              </div>
              {/* <div className="col-4 eventPic">
                <img src={eventImg} alt="Event" />
              </div> */}
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};
