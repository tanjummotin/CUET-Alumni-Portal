import "../nav.css";
const CUETLogo = require("../assets/CUETALUMNI_finall.png");
export default function NavBar1() {
  return (
    <nav className="nav2 navbar navbar-expand-lg ">
      <div className="d-flex justify-content-evenly container-fluid ">
        <a className="navbar-brand" href="#HOME">
          <img src={CUETLogo} alt="Cuet Logo" width="90" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <a className="nav-link ps-4 pe-4" href="#AlumniDirectory">
              Alumni Directory
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link ps-4 pe-4" href="#CAREERS">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
