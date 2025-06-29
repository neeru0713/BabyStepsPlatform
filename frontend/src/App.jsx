import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddMilestone from "./pages/AddMilestone";
import TipsPage from "./pages/TipsPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import EditMilestone from "./components/EditMilestone";
import ShareMilestoneModal from "./components/ShareMilestoneModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="h-[90vh] bg-gray-50 px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddMilestone />} />
          <Route path="/milestone/:id/tips" element={<TipsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/milestone/:id/edit" element={<EditMilestone />} />
          <Route
            path="/shareMilestoneModal"
            element={<ShareMilestoneModal />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
