import React from "react";
import Navbar from "../../Navbar";

const ProtectedRoute = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* // Sidebar */}
      {children}
    </div>
  );
};

export default ProtectedRoute;
