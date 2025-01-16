import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const FlatsDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Navigate to post property page
  const handlePostProperty = () => {
    navigate("/post-property");
  };

  // Fetch properties from the backend API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/property/properties/"
        );
        setProperties(response.data); // Set properties from the response
      } catch (err) {
        setError("Error fetching properties. Please try again later.");
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading properties...</div>;
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
        <h3 className="mb-4">Hello, welcome to Flats Dashboard!</h3>
        <p>Explore properties or post your property for free.</p>
        <button className="btn btn-success" onClick={handlePostProperty}>
          Post Property for Free
        </button>
      </div>
      <h3 className="mb-4 text-center">Available Properties</h3>
      <div className="row">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`http://127.0.0.1:8000${property.image}`}
                  className="card-img-top"
                  alt={property.title}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.description}</p>
                  <p className="text-muted">Location: {property.location}</p>
                  <p className="fw-bold">Price: ₹{property.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            No properties available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default FlatsDashboard;
