import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #007bff, #0056b3)", // Gradient background for a modern look
        borderRadius: "0 0 15px 15px", // Rounded corners at the bottom
        padding: "15px 30px",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/home"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Vastyam
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  color: "#fff",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/logout"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  color: "#fff",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
