import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import HomeDashboard from "./components/HomeDashboard/HomeDashboard";
import Logout from "./components/Logout/Logout";
import FlatsDashboard from "./components/Flats/FlatsDashboard";
import PostProperty from "./components/post-property/post-property";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/flats" element={<FlatsDashboard />} />
        <Route path="/flats" element={<FlatsDashboard />} />
        <Route path="/post-property" element={<PostProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
