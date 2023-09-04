import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    let data = {
      username: email,
      password: password,
    };
    // const { username, password } = this.state;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("LOGINRESPONSE", response);

      if (response.ok) {
        // Handle successful login or registration
      } else {
        // Handle authentication failure or server error
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="vh-100">
      <h2 style={{ margin: "26px" }}>LOGIN HERE</h2>

      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter Email"
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                />
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}

                {/* <a href="#!">Forgot password?</a> */}
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={(e) => SubmitHandler(e)}
              >
                Sign in
              </button>
              <div
                className="divider d-flex align-items-center my-4"
                style={{ justifyContent: "center" }}
              >
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              {/* <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f me-2" />
                Continue with Facebook
              </a>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2" />
                Continue with Twitter
              </a> */}

              {/* <Link className="small text-muted" href="#!">
                Forgot password?
              </Link> */}
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  href="#!"
                  style={{ color: "#393f81", textDecoration: "underline" }}
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
