import axios from "axios";
import { clearAuth, getToken } from "@/lib/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  timeout: 10000,
});

// Attach the saved Bearer token to every protected API request.
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && getToken()) {
      clearAuth();
      if (typeof window !== "undefined" && window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
    }
    return Promise.reject(error);
  }
);

export const getErrorMessage = (error) => {
  if (!error.response) {
    return "Backend server is not responding. Please make sure the server is running.";
  }

  return (
    error.response.data?.message ||
    error.response.data?.errors?.[0]?.msg ||
    "Something went wrong. Please try again."
  );
};

export default api;
