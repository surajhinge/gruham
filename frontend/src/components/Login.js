import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/users/login/", {
        mobile,
        password,
      });
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      alert("Login successful!");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
