import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import HomeDashboard from "./components/HomeDashboard/HomeDashboard";
import FlatsDashboard from "./components/Flats/FlatsDashboard";

function App() {
  return (
    <Router>
        <Navbar />

        <br />
        <br />

        <Navbar />
        <Routes>
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/flats" element={<FlatsDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      
    </Router>
  );
}

export default App;
