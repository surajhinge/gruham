import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/api/", // Django backend URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
