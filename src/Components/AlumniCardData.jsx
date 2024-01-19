import React, { Component } from "react";
import { CardUi } from "./AlumniCardUi";
import "./Cardstyle.css";
import { FaCirclePlus } from "react-icons/fa6";

import employeeAttributes from "./employeedata.json";

class CardsData extends Component {
  render() {
    return (
      <div className="container">
        <div className=" row  row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 ">
          {employeeAttributes.map((record, index) => {
            return (
              <div key={index} className="col-md-6 mb-3">
                <CardUi
                  name={record.name}
                  designation={record.designation}
                  gender={record.gen}
                  about={record.about}
                  rating={record.rating}
                  project={record.project}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardsData;
