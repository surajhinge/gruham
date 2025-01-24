import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const PostPlot = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("image", image);

    try {
      await axios.post(
        "http://54.145.26.234:8000/plot_property/plot_properties/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/plots");
    } catch (error) {
      alert("Error posting plot. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #b3cde0, #cfe3ff)", // Light blue gradient background
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Navbar />

      <div className="container mt-5">
        <h3
          className="mb-4 text-center"
          style={{ color: "#333", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
        >
          Post Your Plot
        </h3>
        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-4 rounded-3"
          style={{
            backgroundColor: "white",
            maxWidth: "600px",
            margin: "0 auto",
            borderRadius: "15px",
          }}
        >
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label"
              style={{ fontWeight: "600", color: "#333" }}
            >
              Plot Area
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                padding: "12px 15px",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label"
              style={{ fontWeight: "600", color: "#333" }}
            >
              Plot Details (e.g., area, contact info)
            </label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                padding: "12px 15px",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="price"
              className="form-label"
              style={{ fontWeight: "600", color: "#333" }}
            >
              Price (₹)
            </label>
            <input
              type="number"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                padding: "12px 15px",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="location"
              className="form-label"
              style={{ fontWeight: "600", color: "#333" }}
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                padding: "12px 15px",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="image"
              className="form-label"
              style={{ fontWeight: "600", color: "#333" }}
            >
              Plot Image
            </label>
            <input
              type="file"
              id="image"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
              required
              style={{
                borderRadius: "8px",
                padding: "12px 15px",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              }}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: "12px",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                background: "linear-gradient(90deg, #007bff, #0056b3)",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Post Plot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPlot;
