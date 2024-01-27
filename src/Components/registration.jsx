import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Registration() {
  return (
    <>
      <div className="container-fluid registration-form mb-5">
        <form>
          <div className="form-row row">
            <div className="form-group col-md-12">
              <label htmlFor="fieldName">Name</label>
              <input
                type="text"
                className="form-control"
                id="fieldName"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-4">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" className="form-control" id="dob" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                type="text"
                className="form-control"
                id="bloodGroup"
                placeholder="Enter your blood group"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="gender">Gender</label>
              <div className="input-group">
                <select className="form-control" id="gender">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>

                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-6">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                placeholder="Enter your department"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="batch">Batch</label>
              <input
                type="text"
                className="form-control"
                id="batch"
                placeholder="Enter your batch"
              />
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-12">
              <label htmlFor="presentAddress">Present Address</label>
              <textarea
                className="form-control"
                id="presentAddress"
                rows="3"
                placeholder="Enter your present address"
              ></textarea>
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-6">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                className="form-control"
                id="organization"
                placeholder="Enter your organization"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="presentPosition">Present Position</label>
              <input
                type="text"
                className="form-control"
                id="presentPosition"
                placeholder="Enter your present position"
              />
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="text-center mt-3 w-100">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
