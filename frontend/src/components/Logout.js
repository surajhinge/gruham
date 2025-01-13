import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    alert("Logged out successfully!");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
