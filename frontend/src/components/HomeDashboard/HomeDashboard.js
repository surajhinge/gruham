import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomeDashboard = () => {
  const navigate = useNavigate();

  const catalogItems = [
    {
      name: "Flats",
      icon: faBuilding,
      navigate: "/flats",
    },
    {
      name: "Plots",
      icon: faMapMarkerAlt,
      navigate: "/plots",
    },
    {
      name: "Projects",
      icon: faBullhorn,
      navigate: "/projects",
    },
  ];

  return (
    <div className="container mt-5">
      {/* <h1 className="text-center mb-4">Home </h1> */}
      <Navbar />

      <br />
      <br />
      <div className="row">
        {catalogItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="3x"
                  className="mb-3 text-primary"
                />
                <h5 className="card-title">{item.name}</h5>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate(item.navigate)}
                >
                  Go to {item.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
