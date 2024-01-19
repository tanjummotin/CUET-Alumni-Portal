import React from "react";
import "./eventCareer.css";
import { Box } from "@mui/system";
import NavBar2 from "./NavBar2";
import NavBar1 from "./NavBar2";
import { Grid } from "@mui/material";
export default function CareereCardUi() {
  return (
    <>
      <div className="CareereContainer row container-fluid">
        <div className="col-3 CareerType">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="job" />
            <label class="form-check-label" for="job">
              Job
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Higher Studies"
            />
            <label class="form-check-label" for="Higher Studies">
              Higher Studies
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="scholarship"
            />
            <label class="form-check-label" for="scholarship">
              Scholarship
            </label>
          </div>
        </div>
        <div className="col-9">
          <Box className="mt-4 container text-center">
            <div className="row">
              <div className="col-2">
                <div className="row-cols-1 ">
                  <strong>Dealine</strong>
                </div>
                <div className="row-cols-1 date">27</div>
                <div className="row-cols-1 month">September</div>
              </div>
              <div className="col-6 description">
                <div className="title row-cols-1"> Teech talks</div>
                <div className="row pt-4">
                  <div className="col-lg-6 col-12 time">7.30 - 8.30</div>
                  <div className="col-lg-6 col-12 place"> Cuet Auditoriam </div>
                </div>
              </div>
              {/* <div className="col-4 CareerePic">
          <img alt="Careere" />
        </div> */}
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
