import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  function onFormSubmit(formEvent: FormEvent) {
    formEvent.preventDefault();
    console.log("Form Submitted", formEvent);
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

        {/* Right Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h1 className="fw-bold">
              Hey, <br /> Welcome Back!
            </h1>
            <p className="text-muted">We are very happy to onboard you!</p>
            <form className="mt-5" onSubmit={onFormSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="commitcommunity@gmail.com"
                  />
                </div>
              </div>

              <div className="d-flex d-flex flex-row-reverse">
                <button className="btn btn-primary" type="button">
                  Send OTP <img src="/images/send.png" />
                </button>
              </div>

              {/* OTP */}
              <div className="mb-3">
                <label htmlFor="otp" className="form-label fw-semibold">
                  OTP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  placeholder="************"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="************"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  Reenter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="************"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="acceptTerms"
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  By signing up, you agree to our <a href="/">Terms of Use</a>{" "}
                  and <a href="/">Privacy Policy</a>.
                </label>
              </div>

              {/* Remember Me */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe" className="form-check-label">
                  Remember Me as Member of COMMIT Community.
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 py-2">
                Sign Up
              </button>

              {/* Link to Login */}
              <p className="mt-3 text-center">
                Already have an account? <Link to="/signin">Login here!</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
