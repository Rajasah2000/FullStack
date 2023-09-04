import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = async (e) => {
    // e.preventDefault();
    // let data = {
    //   username: email,
    //   password: password,
    // };
    // // const { username, password } = this.state;
    // try {
    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   console.log("LOGINRESPONSE", response);
    //   if (response.ok) {
    //     // Handle successful login or registration
    //   } else {
    //     // Handle authentication failure or server error
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="text-center">
          {/* Background image */}
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage:
                'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
              height: 250,
            }}
          />
          {/* Background image */}
          <div
            className="card mx-4 mx-md-5 shadow-5-strong"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    {/* <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            placeholder="Enter First Name..."
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                            placeholder="Enter Last Name..."
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password..."
                      />
                      {/* <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label> */}
                    </div>
                    {/* Checkbox */}

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={(e) => SubmitHandler(e)}
                    >
                      Sign up
                    </button>
                    {/* Register buttons */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};

export default SignUp;
