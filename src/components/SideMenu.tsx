import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const SideMenu: React.FC = () => {
  return (
    <div className="container-fluid vh-100 d-flex">
      {/* Sidebar */}
      <div
        className="bg-light border-end d-flex flex-column"
        style={{ width: "250px" }}
      >
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <h4 className="mb-0">Lapsa</h4>
          {/* Collapsible Menu */}
          <button
            className="btn btn-light d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <nav className="nav flex-column flex-grow-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "fw-bold text-primary" : ""}`
            }
            end
          >
            Getting Started
          </NavLink>
          <NavLink
            to="/campaign"
            className={({ isActive }) =>
              `nav-link ${isActive ? "fw-bold text-primary" : ""}`
            }
          >
            Campaign
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? "fw-bold text-primary" : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/billing"
            className={({ isActive }) =>
              `nav-link ${isActive ? "fw-bold text-primary" : ""}`
            }
          >
            Billing
          </NavLink>
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              `nav-link ${isActive ? "fw-bold text-primary" : ""}`
            }
          >
            Notification
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link ${isActive ? "fw-bold text-primary" : ""}`
            }
          >
            Settings
          </NavLink>
        </nav>
        <div className="p-3 border-top">
          <button className="btn btn-primary w-100">Upgrade to Premium</button>
        </div>
      </div>

      {/* Collapsible Menu (Offcanvas for smaller screens) */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">
            Lapsa Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : ""}`
              }
              end
            >
              Getting Started
            </NavLink>
            <NavLink
              to="/campaign"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : ""}`
              }
            >
              Campaign
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : ""}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : ""}`
              }
            >
              Billing
            </NavLink>
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : ""}`
              }
            >
              Notification
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : ""}`
              }
            >
              Settings
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default SideMenu;
