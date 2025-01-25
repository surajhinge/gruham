import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const FlatsDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePostProperty = () => {
    navigate("/post-property");
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://107.21.129.33:8000/property/properties/"
        );
        setProperties(response.data);
      } catch (err) {
        setError("Error fetching properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #b3cde0, #cfe3ff)", // Light blue gradient background
        }}
      >
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center text-danger"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #b3cde0, #cfe3ff)", // Light blue gradient background
        }}
      >
        <div className="text-center">
          <h4>{error}</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #b3cde0, #cfe3ff)", // Light blue gradient background
        padding: "20px",
      }}
    >
      <Navbar />

      <div className="container mt-4">
        <div className="text-center mb-5">
          <h3
            style={{
              fontWeight: "bold",
              color: "#333",
              fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
            }}
          >
            Welcome to Flats Dashboard
          </h3>
          <p style={{ color: "#555", fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
            Explore properties or post your property for free.
          </p>
          <button
            className="btn btn-success"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              background: "linear-gradient(90deg, #28a745, #218838)",
              border: "none",
              color: "#fff",
            }}
            onClick={handlePostProperty}
          >
            Post Property for Free
          </button>
        </div>

        <h4
          className="text-center mb-4"
          style={{ color: "#333", fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
        >
          Available Properties
        </h4>

        <div className="row">
          {properties.length > 0 ? (
            properties.map((property) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={property.id}>
                <div
                  className="card h-100 shadow-lg"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={`http://107.21.129.33:8000${property.image}`}
                    className="card-img-top"
                    alt={property.title}
                    style={{
                      maxHeight: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      {property.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        color: "#555",
                        fontSize: "14px",
                      }}
                    >
                      {property.description}
                    </p>
                    <p
                      className="text-muted"
                      style={{ fontSize: "14px", marginBottom: "5px" }}
                    >
                      Location: {property.location}
                    </p>
                    <p
                      className="fw-bold"
                      style={{
                        fontSize: "16px",
                        color: "#007bff",
                      }}
                    >
                      Price: ₹{property.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-100">
              <h5>No properties available at the moment.</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlatsDashboard;
