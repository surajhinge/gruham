import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const PostProperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "api.vastyam.com:8000/property/properties/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Redirect to the Flats page after success
      navigate("/flats");
    } catch (error) {
      alert("Error posting property. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #b3cde0, #cfe3ff)", // Light blue gradient
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Navbar />

      <div className="container mt-5">
        <h3
          className="mb-4 text-center"
          style={{
            fontWeight: "bold",
            color: "#333",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          Post Your Property
        </h3>

        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-4 rounded-3"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#fff",
          }}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              BHK Type (e.g. 1 BHK, 2 BHK, etc.)
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Contact Details
            </label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Property Image
            </label>
            <input
              type="file"
              id="image"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: "12px 20px",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                background: "linear-gradient(90deg, #007bff, #0056b3)",
                border: "none",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              Post Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProperty;
