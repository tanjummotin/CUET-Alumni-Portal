import React, { useState, useEffect } from "react";
import { CardUi } from "./AlumniCardUi"; // Import the CardUi component
import "./Cardstyle.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const CardsData = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [search_by, setsearch_by] = useState(""); // Default search criteria
  const [search_value, setsearch_value] = useState("");


  useEffect(() => {
    // Fetch alumni data from PHP script
    fetch("http://localhost/test/fetch_alumni_data.php")
      .then((response) => response.json())
      .then((data) => setAlumniData(data))
      .catch((error) => console.error("Error fetching alumni data:", error));
  }, []);
  const handleSearch = () => {
    if (search_value.length == 0) {
      alert("Search Value required!!");
      return;
    }
    if (search_by.length == 0) {
      alert("Search by required!!");
      return;
    }
    const url = "http://localhost/test/insert_search_values.php";
    let fData = new FormData();
    fData.append("search_by", search_by);
    fData.append("search_value", search_value);
    axios
      .post(url, fData)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
  };

 

  return (
    <>
    <div className="container">
    <form action = "" align = 'center' method = "post">
        <div className="mb-3">
          {/* <label htmlFor="searchBy">Search By:</label> */}
          <select
            id="search_by"
            value={search_by}
            name = "search_by"
            onChange={(e) => setsearch_by(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="present_position">Present Position</option>
            <option value="organization">Organization</option>
            {/* Add more options based on your data structure */}
          </select>
          <input
            type="text"
            id="search_value"
            placeholder="Type to search"
            name = "search_value"
            value={search_value}
            onChange={(e) => setsearch_value(e.target.value)}
          />
          
          {/* <button onClick={handleSearch}>Search</button> */}
          <div className="d-flex justify-content-center">
                      <input
                        type="button"
                        className="btn btn-primary btn-block btn-sm "
                        name="submit"
                        id="submit"
                        value="Search"
                        onClick={handleSearch}
                      />
                    </div>
         
        </div>
        </form>
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2">
          {alumniData.map((record) => (
            <div key={record.id} className="col-md-6 mb-3">
              <CardUi
                name={record.name}
                present_position={record.present_position}
                organization={record.organization}
                blood_group={record.blood_group}
                email={record.email}
                gender={record.gender}
                present_address={record.present_address}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsData;
