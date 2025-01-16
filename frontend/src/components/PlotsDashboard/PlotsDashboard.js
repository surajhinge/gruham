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
          "http://127.0.0.1:8000/plot_property/plot_properties/"
        );
        setPlots(response.data); // Set plots from the response
      } catch (err) {
        setError("Error fetching plots. Please try again later.");
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchPlots();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading plots...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="text-center">
        <Navbar />

        <br />
        <br />
        <h3 className="mb-4">Hello, welcome to Plots Dashboard!</h3>
        <p>Explore plots or post your plot for free.</p>
        <button className="btn btn-success" onClick={handlePostPlot}>
          Post Plot for Free
        </button>
      </div>
      <h3 className="mb-4 text-center">Available Plots</h3>
      <div className="row">
        {plots.length > 0 ? (
          plots.map((plot) => (
            <div className="col-md-4 mb-4" key={plot.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`http://127.0.0.1:8000${plot.image}`}
                  className="card-img-top"
                  alt={plot.title}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{plot.title}</h5>
                  <p className="card-text">{plot.description}</p>
                  <p className="text-muted">Location: {plot.location}</p>
                  <p className="fw-bold">Price: ₹{plot.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No plots available at the moment.</div>
        )}
      </div>
    </div>
  );
};

export default PlotsDashboard;
