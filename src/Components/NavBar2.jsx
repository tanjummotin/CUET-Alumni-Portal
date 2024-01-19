import "../nav.css";
export default function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex justify-content-evenly container-fluid ">
        <ul className="navbar-nav">
          <li className="nav-item ps-4 pe-4">
            <li className="nav-item ps-4 pe-4">
              <a className="nav-link" href="#ABOUT">
                ABOUT
              </a>
            </li>
          </li>
          <li className="nav-item ps-4 pe-4">
            <a className="nav-link" href="#EVENTS">
              EVENTS
            </a>
          </li>
          <li className="nav-item ps-4 pe-4">
            <a className="nav-link" href="#CAREERS">
              CAREERS
            </a>
          </li>
          <li class="nav-item ps-4 pe-4 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MEMBERSHIP
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
