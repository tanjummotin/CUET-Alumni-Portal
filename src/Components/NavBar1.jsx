import "../nav.css";
import { Link } from "react-router-dom";
const CUETLogo = require("../assets/CUETALUMNI_finall.png");

export default function NavBar1() {
  return (
    <nav className="nav2 navbar navbar-expand-lg ">
      <div className="d-flex justify-content-evenly container-fluid ">
        <Link className="navbar-brand" to="/">
          <img src={CUETLogo} alt="Cuet Logo" width="90" height="40" />
        </Link>
        {/* /* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link className="nav-link link ps-4 pe-4" to="/alumniDirectory">
              Alumni Directory
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link ps-4 pe-4 login-btn" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
