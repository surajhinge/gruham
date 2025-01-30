import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import HomeDashboard from "./components/HomeDashboard/HomeDashboard";
import Logout from "./components/Logout/Logout";
import FlatsDashboard from "./components/Flats/FlatsDashboard";
import PostProperty from "./components/post-property/post-property";
import PlotsDashboard from "./components/PlotsDashboard/PlotsDashboard";
import PostPlot from "./components/Post-plots/Post-plots";

function ForceHttps() {
  const location = useLocation();

  useEffect(() => {
    if (
      window.location.protocol === "http:" &&
      location.pathname !== "/" && // Allow Login
      location.pathname !== "/signup" // Allow Signup
    ) {
      window.location.href = "https://" + window.location.host + location.pathname;
    }
  }, [location]);

  return null; // This component only handles redirection
}

function App() {
  return (
    <Router>
      <ForceHttps /> {/* Redirect HTTP to HTTPS for all pages except login & signup */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/flats" element={<FlatsDashboard />} />
        <Route path="/plots" element={<PlotsDashboard />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/post-plot" element={<PostPlot />} />
      </Routes>
    </Router>
  );
}

export default App;
