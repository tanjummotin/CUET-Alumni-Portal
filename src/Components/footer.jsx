import logo from "../assets/CUETALUMNI_finall.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img src={logo} alt="CUET Alumni" />
            <p>
              The organizational structure and management system of CUET Alumni
              are directed by its Constitution. The Constitution outlines a
              three-tier structure for overseeing the affairs of the
              organization.
            </p>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/eventList">Events</Link>
              </li>
              <li>
                <Link to="/alumniDirectory">Alumni Directory</Link>
              </li>
              <li>
                <Link to="/register">Apply for membership</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
