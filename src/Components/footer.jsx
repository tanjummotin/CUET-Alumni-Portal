import logo from "../assets/CUETALUMNI_finall.png";

function Footer() {
  return (
    <>
      <div className="contaoner-fluid footer fixed-bottom">
        <div className="row">
          <div className="col-8">
            <img src={logo} alt="" />
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
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="Events">Events</a>
              </li>
              <li>
                <a href="Career">Career</a>
              </li>
              <li>
                <a href="#ApplyforMembership">Apply for membership</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
              <li>
                <a href="#CUET">CUET</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
