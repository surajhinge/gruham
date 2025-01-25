import axios from "axios";

const API = axios.create({
  baseURL: "107.21.129.33:8000/api/", // Django backend URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
