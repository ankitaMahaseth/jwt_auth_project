import axios from "axios";

const API = axios.create({
  baseURL: "https://login-backend-9w0q.onrender.com/api/auth",
});

// Register
export const registerUser = async (userData) => {
  const response = await API.post("/register", userData);
  return response.data;
};

// Login
export const loginUser = async (userData) => {
  const response = await API.post("/login", userData);
  return response.data;
};

// Get profile
export const getUserProfile = async (token) => {
  const response = await API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
