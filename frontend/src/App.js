import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import HomeDashboard from "./components/HomeDashboard/HomeDashboard";
import Logout from "./components/Logout/Logout";
import FlatsDashboard from "./components/Flats/FlatsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/flats" element={<FlatsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
