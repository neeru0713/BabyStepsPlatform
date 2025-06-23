import { Link, useNavigate } from "react-router-dom";
import React from "react";
export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token or session
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow p-4 mb-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-700">
        <Link to="/">Milestone Tracker</Link>
      </div>
      <div className="space-x-4">
        <Link to="/add" className="text-gray-700 hover:text-blue-600">
          Add Milestone
        </Link>
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">
          Register
        </Link>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-800"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
