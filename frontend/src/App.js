import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import HomeDashboard from "./components/HomeDashboard/HomeDashboard";
import Logout from "./components/Logout/Logout";
import FlatsDashboard from "./components/Flats/FlatsDashboard";
import PostProperty from "./components/post-property/post-property";
import PlotsDashboard from "./components/PlotsDashboard/PlotsDashboard";
import PostPlot from "./components/Post-plots/Post-plots";

function App() {
  useEffect(() => {
    if (window.location.protocol === "https:") {
      window.location.href = window.location.href.replace("https://", "http://");
    }
  }, []);

  return (
    <>
      <Router>
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
    </>
  );
}

export default App;
