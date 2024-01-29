import React from "react";
import image1 from "../assets/gate.jpg"; // Replace with your actual image paths
import image2 from "../assets/murti.jpg";
import image3 from "../assets/jungle.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 h-50" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 h-50" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 h-50" alt="Image 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container py-5">
        <strong className="text-center d-block">About CUET ALumni</strong>
        <p>
          To establish a meaningful and future-oriented association for the
          alumni of CUET, focusing on their social, cultural, and professional
          endeavors. The goal is to enhance unity and camaraderie among members,
          provide unwavering assistance to elevate our cherished alma mater into
          a globally acclaimed institution for technical and scientific
          education, and actively contribute to the rapid and sustainable
          development of the nation..<Link to="/">see more</Link>
        </p>
      </div>
    </>
  );
}

export default Home;
