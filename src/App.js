import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard, SignIn } from "./pages";

function App() {
  const isAuthenticated = true; // localStorage.getItem("authToken");

  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/" element={<SignIn />} />

        {/* Protected Route: Dashboard */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
