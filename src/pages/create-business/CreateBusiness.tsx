import React from "react";
import "./CreateBusiness.css"; // Import the custom CSS

const CreateBusiness: React.FC = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Section */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
          <div className="gradient-bg rounded-4 w-75 h-75"></div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            {/* Logo and Heading */}
            <h1 className="fw-bold">Lapsa</h1>
            <h4 className="text-muted">Create Business</h4>
            <p className="text-muted">
              Create your business and review your brand assets.
            </p>

            <form>
              {/* First Name */}
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">+91</span>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="1234567890"
                  />
                  <button className="btn btn-primary" type="button">
                    Send OTP
                  </button>
                </div>
              </div>

              {/* OTP */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                />
                <button className="btn btn-secondary mt-2 w-100" type="button">
                  Verify
                </button>
              </div>

              {/* Company Name */}
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Enter company name"
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                />
              </div>

              {/* State and Pincode */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state">
                    <option>Select State</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="pincode" className="form-label">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    placeholder="Enter pincode"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBusiness;
