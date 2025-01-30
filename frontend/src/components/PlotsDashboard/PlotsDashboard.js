import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const PlotsDashboard = () => {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Navigate to post plot page
  const handlePostPlot = () => {
    navigate("/post-plot");
  };

  // Fetch plots from the backend API
  useEffect(() => {
    const fetchPlots = async () => {
      try {
        const response = await axios.get(
          "http://backend.vastyam.com:8000/api/plot_property/plot_properties/"
        );
        setPlots(response.data);
      } catch (err) {
        setError("Error fetching plots. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlots();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading plots...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>{error}</h4>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #b3e5fc)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Navbar />
      <div className="text-center mt-4">
        <h3
          className="mb-4"
          style={{
            fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Welcome to Plots Dashboard
        </h3>
        <p
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            color: "#555",
          }}
        >
          Explore plots or post your plot for free.
        </p>
        <button
          className="btn btn-success"
          onClick={handlePostPlot}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            background: "linear-gradient(90deg, #28a745, #218838)",
            border: "none",
            color: "#fff",
          }}
        >
          Post Plot for Free
        </button>
      </div>

      <h3
        className="text-center my-4"
        style={{
          color: "#333",
          fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
        }}
      >
        Available Plots
      </h3>

      <div className="row">
        {plots.length > 0 ? (
          plots.map((plot) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={plot.id}>
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
                  src={`http://backend.vastyam.com:8000${plot.image}`}
                  className="card-img-top"
                  alt={plot.title}
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
                    {plot.title}
                  </h5>
                  <p className="card-text" style={{ color: "#555" }}>
                    {plot.description}
                  </p>
                  <p
                    className="text-muted"
                    style={{ fontSize: "14px", marginBottom: "5px" }}
                  >
                    Location: {plot.location}
                  </p>
                  <p
                    className="fw-bold"
                    style={{
                      fontSize: "16px",
                      color: "#007bff",
                    }}
                  >
                    Price: ₹{plot.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-100">
            <h5>No plots available at the moment.</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlotsDashboard;
