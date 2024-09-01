import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button, message } from "antd";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("TOKEN");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    message.success("Logged Out Successfully!");
    localStorage.removeItem("TOKEN");
    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <a href="https://detailedvehiclehistory.com/">
          <img
            src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2023/10/logo.png"
            height="70"
            width="136"
            alt="logo"
          />
        </a>
      </div>

      <div className="nav-container">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/sample-reports">Sample Reports</Link>
          </li>
          <li>
            <Link to="/VIN-decoder">VIN Decoder</Link>
          </li>
          <li>
            <Link to="/VinForm">Window Sticker</Link>
          </li>
          <li>
            <Link to="/dealers">For Dealers</Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              Our Tools <i className="fas fa-angle-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/license-plate-lookup">License Plate Lookup</Link>
              </li>
              <li>
                <Link to="/classic-window-stickers">
                  Classic Car Window Sticker
                </Link>
              </li>
              <li>
                <Link to="/classic-vin-decoder">Classic Car VIN Decoder</Link>
              </li>
              <li>
                <Link to="/motorcycle-vin-check">Motorcycle VIN Decoder</Link>
              </li>
              <li>
                <Link to="/vehicle-recalls">Vehicle Recall Check</Link>
              </li>
            </ul>
          </li>
        </ul>
          <div className="auth-links">
            <Button onClick={() =>  window.location.href = "http://localhost:3000/login"}>Login</Button>
            <Button onClick={() =>  window.location.href = "http://localhost:3000/signup"}>Sign up</Button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
