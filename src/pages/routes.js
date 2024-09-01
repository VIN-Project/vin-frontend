import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SampleReports from "../pages/vin-sample/SampleReports";
import VINDecoder from "./VINDecoder";
//import WindowSticker from "./WindowSticker";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Acura from "./Acura/Acura";
import VinForm from "../vin-num/VinForm";
import ProtectedRoute from "../components/Layout/ProtectedRoute";
// Import other pages as needed

export const routes = {
  sampleReports: "/sample-reports",
  VINDecoder: "/VIN-decoder",
  windowSticker: "/window-sticker",
  login: "/login",
  signup: "/signup",
  Acura: "/Acura",
  VinForm: "/VinForm",
};

const LandingPageRouts = () => {
  const token = localStorage.getItem("TOKEN");
  return (
    <Routes>
      <Route
        path={routes.sampleReports}
        element={
          <ProtectedRoute>
           <SampleReports />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.VINDecoder}
        element={
          <ProtectedRoute>
            <VINDecoder />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.VinForm}
        element={
          <ProtectedRoute>
            <VinForm/>
          </ProtectedRoute>
        }
      />
       <Route
        path={routes.Acura}
        element={
          <ProtectedRoute>
            <Acura />
          </ProtectedRoute>
        }
      />
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.signup} element={<Signup />} />
      
      <Route
        path="*"
        element={<Navigate to={token ? routes.VINDecoder : routes.login} />}
      />
    </Routes>
  );
};

export default LandingPageRouts;
