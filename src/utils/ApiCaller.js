import axios from "axios";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: "https://6db2-122-161-48-187.ngrok-free.app/", // Replace with your API's base URL
  timeout: 10000, // Timeout for requests (in ms)
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add authorization tokens or log requests here
    const token = localStorage.getItem("token"); // Example token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response here (e.g., format data)
    return response.data;
  },
  (error) => {
    // Handle error responses here (e.g., display a toast)
    if (error.response) {
      // Server-side errors
      console.error("API Error:", error.response.data);
      // You can implement custom error handling logic based on status codes
      if (error.response.status === 401) {
        // Token expired or unauthorized, log out the user, etc.
        console.log("Unauthorized! Logging out...");
        // localStorage.clear(); // Example: clearing user session
      }
    } else {
      // Network or other errors
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
