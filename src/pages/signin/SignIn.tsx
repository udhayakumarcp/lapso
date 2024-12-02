import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  function onFormSubmit(formEvent: FormEvent) {
    formEvent.preventDefault();
    navigate("/");
  }
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Section */}
        <div className="col-lg-6 p-0 mh-100 d-none d-lg-flex">
          <div className="p-4">
            <img src="/images/unsplash.png" className="mh-100 mw-100" />
          </div>
        </div>

        {/* Sign-In Form Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center rounded-end">
          <div className="p-4 w-100" style={{ maxWidth: "400px" }}>
            <h2 className="fw-bolder">Hey,</h2>
            <h2 className="fw-bolder">Welcome Back!</h2>
            <p className="text-muted">We are very happy to see you back!</p>
            <form onSubmit={onFormSubmit}>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="commitcommunity@gmail.com"
                />
              </div>
              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-100 py-2">
                Login
              </button>
            </form>
            {/* Footer */}
            <div className="text-center mt-4">
              <p>
                Don’t have an account? <Link to="/signup"> Sign Up here!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
