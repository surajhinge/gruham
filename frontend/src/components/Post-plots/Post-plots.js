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
        "http://127.0.0.1:8000/plot_property/plot_properties/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/plots"); // Redirect to the Plots page
    } catch (error) {
      alert("Error posting plot. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container mt-5">
      <Navbar />

      <br />
      <br />
      <h3 className="mb-4 text-center">Post Your Plot</h3>
      <form
        onSubmit={handleSubmit}
        className="shadow-sm p-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Plot Area
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
            Plot Details (e.g., area, contact info)
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
            Price (₹)
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
            Plot Image
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
          <button type="submit" className="btn btn-primary">
            Post Plot
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostPlot;
