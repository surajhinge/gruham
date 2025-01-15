import React from "react";
import { useNavigate } from "react-router-dom";

const FlatsDashboard = () => {
  const navigate = useNavigate();

  const handlePostProperty = () => {
    navigate("/post-property"); // Redirect to the property posting page
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h3 className="mb-4">Hello, welcome to Flats Dashboard!</h3>
        <p>Explore properties or post your property for free.</p>
        <button className="btn btn-success" onClick={handlePostProperty}>
          Post Property for Free
        </button>
      </div>
    </div>
  );
};

export default FlatsDashboard;
