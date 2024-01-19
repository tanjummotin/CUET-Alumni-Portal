import cover from "../assets/Untitled design (1).png";

export default function Login() {
  return (
    <div className="container-fluid p-3 row justify-content-center">
      <div className="col-md-6">
        <div className="card border-0 login-card">
          <div className="card-body  p-5">
            <h5 className="card-title text-center mb-4">
              Join the CUET Alumni Association to reconnect with your friends,
              classmates, seniors & juniors.
            </h5>
            <form className="row justify-content-center">
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="col-12 mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>
              <div className="col-12 mb-3 text-center">
                <button type="forgotPassWord" className="btn btn-secondary">
                  <a
                    href="#"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Forgot password?
                  </a>
                </button>
              </div>
              <div className="col-12 text-center">
                <button type="createAcc" className="btn btn-secondary">
                  <a
                    href="#"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Create an account
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-6">
        <img src={cover} alt="Cover" className="img-fluid" />
      </div>
    </div>
  );
}
